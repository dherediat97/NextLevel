var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  http = require("http"),
  https = require("https"),
  request = require('request'),
  crypto = require('crypto'),
  colors = require('colors/safe');
var sessionID = {
  "value": ""
}
var riotAPIKEY = "RGAPI-78647b29-9558-4849-805b-08b06a8e7823";
var hirezAPIKEY = "2579";
var hirezAUTHKEY = "A31B234EB23A4E3D8EE689E0FD4AD813";
var urlBasePaladins = "http://api.paladins.com/paladinsapi.svc/";
var urlBaseSmite = "http://api.smitegame.com/smiteapi.svc/";
var urlBaseLOL = 'https://euw1.api.riotgames.com/lol/';
app.use(bodyParser.urlencoded({
  extended: false
}));
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

function getDateTime() {
  var date = new Date();

  var hour = date.getUTCHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min = date.getUTCMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec = date.getUTCSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getUTCFullYear();

  var month = date.getUTCMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day = date.getUTCDate();
  day = (day < 10 ? "0" : "") + day;

  return year + month + day + hour + min + sec;

}

function createSignature(metodo) {
  var data = hirezAPIKEY + metodo + hirezAUTHKEY + getDateTime();
  var signature = crypto.createHash('md5').update(data).digest("hex");
  return signature;
}

function initSessionHIREZ() {
  var session_ID = "";
  var signature = createSignature('createsession');
  var urlCreateSession = urlBasePaladins + 'createsessionjson/' + hirezAPIKEY + '/' + signature + '/' + getDateTime();
  http.get(urlCreateSession, (resp) => {
    var data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });


    resp.on('end', () => {
      var datosJSON = JSON.parse(data);
      // console.log(datosJSON)
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
    var urlObtenerCampeones = urlBasePaladins + 'getchampionsjson/' + hirezAPIKEY + '/' + signature + '/' + sessionID.value + '/' + getDateTime() + '/9';
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

  setTimeout(function(){
    var signature = createSignature('getgods');
    var urlObtenerDioses = urlBaseSmite + 'getgodsjson/' + hirezAPIKEY + '/' + signature + '/' + sessionID.value + '/' + getDateTime() + '/9';
    var options = {
      url: urlObtenerDioses,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    request(options, function(error, response, body) {
      var diosesJSON = {"dioses":""}
      diosesJSON.dioses = JSON.parse(body);
      res.send(diosesJSON);
    });
  },1000)


});

router.get('/leagueOfLegends/buscarInvocador/:nombre', function(req, res) {

  var options = {
    url: urlBase + 'summoner/v3/summoners/by-name/' + req.params.nombre,
    headers: {
      'Content-Type': 'application/json',
      'X-Riot-Token': riotAPIKEY
    }
  };
  request(options, function(error, response, body) {
    res.send(response);
  });
});

app.use(router);

app.listen(9797, function() {
  console.log(colors.green("API escuchando en http://localhost:9797"));
});
