var express = require("express");
var app = express();

function obj(ip, lang, soft){
  this.ip = ip;
  this.language = lang;
  this.software = soft;
}
app.get('/', function(req, res){
  var ip = req.headers['x-forwarded-for'];
  ip = ip.slice(0,12);
  
  var s = req.headers['user-agent'];
  s = s.split(') ')[0].split(' (')[1];
  
  var language = req.acceptsLanguages();
   
  var finish = new obj(ip, language[0], s);
  res.json(finish);
  
});
app.listen(3000);