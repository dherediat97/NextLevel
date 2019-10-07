var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  http = require("http"),
  https = require("https"),
  request = require('request'),
  crypto = require('crypto'),
  util = require('./util/time/time.js'),
  urls = require('./util/urls.js'),
  colors = require('colors/safe');
  var sessionID = {
    "value": ""
  }
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  var port = process.env.PORT || 23316;
  console.log("Puerto: " + port)
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

  var router = express.Router();

  router.get('/', function(req, res) {
    res.send("Bienvenido a Next Level API");
  });


function createSignature(metodo) {
  var data = urls.hirezAPIKEY + metodo + urls.hirezAUTHKEY + util.getDateTimeHiRez();
  var signature = crypto.createHash('md5').update(data).digest("hex");
  return signature;
}

function initSessionHIREZ() {
  var session_ID = "";
  var signature = createSignature('createsession');
  var urlCreateSession = urls.urlBasePaladins + 'createsessionjson/' + urls.hirezAPIKEY + '/' + signature + '/' + util.getDateTimeHiRez();
  http.get(urlCreateSession, (resp) => {
    var data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });


    resp.on('end', () => {
      var datosJSON = JSON.parse(data);
      if (datosJSON.session_id != null || datosJSON.session_id != "" || datosJSON.ret_msg == "Approved")
        session_ID = datosJSON.session_id;
      sessionID.value = session_ID;

    });

  }).on("error", (err) => {

  });
}

router.get('/obtenerCampeones', function(req, res) {
  initSessionHIREZ();

  setTimeout(function(){
    var signature = createSignature('getchampions');
    var urlObtenerCampeones =
    urls.urlBasePaladins + 'getchampionsjson/' + urls.hirezAPIKEY + '/' + signature +
    '/' + sessionID.value +  '/'+  util.getDateTimeHiRez() +  '/9';
    var options = {
      url: urlObtenerCampeones,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    request(options, function(error, response, body) {
      var campeonesJSON = {"campeones":""}
      campeonesJSON.campeones = JSON.parse(body);
      res.send(campeonesJSON);
    });
  },1000)


});
router.get('/obtenerDioses', function(req, res) {
  initSessionHIREZ();
  getDataHIREZ(sessionID,'getgods',res);
});

function getDataHIREZ(sessionID,signatureString,res){
  setTimeout(function(){
    var signature = createSignature(signatureString);
    var url = urls.urlBaseSmite + 'getgodsjson/' + urls.hirezAPIKEY + '/' + signature + '/' + sessionID.value + '/' + util.getDateTimeHiRez() + '/9';
    var options = {
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    request(options, function(error, response, body) {
      var diosesJSON = {"dioses":JSON.parse(body)};
      res.send(diosesJSON);
    });
  },1000)
}


router.get('/leagueOfLegends/buscarInvocador/:nombre', function(req, res) {

  var options = {
    url: urls.urlBaseLOL + 'summoner/v3/summoners/by-name/' + req.params.nombre,
    headers: {
      'Content-Type': 'application/json',
      'X-Riot-Token': urls.riotAPIKEY
    }
  };
  request(options, function(error, response, body) {
    res.send(response);
  });
});

app.use(router);

app.listen(port, function() {
  console.log(colors.green("API escuchando en http://localhost:"+port));
});
