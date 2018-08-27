module.exports = function (app,config) {

  var errorHandler = require('errorhandler');
  var morgan = require('morgan') // express 默认log midware
  var bodyParser = require("body-parser");
  var cookieParser = require("cookie-parser");
  var session = require('express-session');
  var MongoStore = require('connect-mongo')(session);
  var cors = require("cors");
  var mongoose = require('mongoose');
  app.use(errorHandler());
  app.use(bodyParser.json({limit: '10240mb'}));
  app.use(bodyParser.urlencoded({extended: true}));
  console.log('■■■secret.cookieSecret■')




}
