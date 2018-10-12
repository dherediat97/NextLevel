exports.getDateTimeHiRez = function() {
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
