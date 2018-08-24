const express = require('express');
const fs = require('fs');
const path = require('path');

//使用body-parser，对json数据处理，可在后面配置router接口的时候，对req和res进行数据处理
const bodyParser = require('body-parser');
const app = express();//引入express
const apiRoutes = express.Router();    //引入router

//解决跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
/*!// 访问静态资源
 app.use(express.static(path.join(__dirname,'../dist')));
 // 访问单页
 app.get('*', function (req, res) {
 const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
 res.send(html);
 });*/
/*
 app.use("/getList",function(req,res){
 const obj = {
 code:2,
 list:[
 {name:"apple"},
 {name:"banana"}
 ]
 };
 res.jsonp(obj)
 });
 */

/*app.use('/getList',(req,res) =>{
  const obj = {
    code:0,
    list:[
      {name:"apple"},
      {name:"banana"}
    ]
  };
  res.send(obj)
});*/
app.use('/',(req,res) => {
  res.send('hello express!')
});
app.listen(5000,() => {
  console.log('app listening on port 5000.')
});

