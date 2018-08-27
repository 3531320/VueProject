// 后台入口文件
var express = require('express');
let app = express();
const apiRouter = express.Router();
const config = require('./config');  // 引入文件
require('./databaseConnect')(config); // 引入文件
require('./setup')(app,config); // 引入文件
require('./router')(express, app, config, apiRouter); // 引入文件

/*app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});*/
// 监听后台
app.listen(3000,function () {
  console.log('app listening on port 3000.')
})


