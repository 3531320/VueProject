
var express = require('express');
let app = express();
const apiRouter = express.Router();
const config = require('./config');
require('./databaseConnect')(config);
require('./setup')(app,config);
require('./router')(express, app, config, apiRouter);

/*app.use('/api/news/list',(req,res) => {
  const obj = {
    code: 0,
    list: [
      {name: "apple"},
      {name: "banana"}
    ]
  };
  res.send(obj)
});
 app.use('/',(req,res) => {
 res.send('hello express!')
 });
*/
app.listen(3000,function () {
  console.log('app listening on port 3000.')
})


