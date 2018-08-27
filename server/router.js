var path = require('path');
module.exports = function (express,app,config,apiRouter) {
  require('./routes/get')(app, config, apiRouter);
  require('./routes/post')(app, config, apiRouter);
  require('./routes/put')(app, config, apiRouter);
  require('./routes/delete')(app, config, apiRouter);
  app.all('/',function (req,res,next) {
    console.log('■req.originalUrl■', req.originalUrl)
  });
  app.use('/getList',(req,res) => {
    const obj = {
      code: 0,
      list: [
        {name: "apple"},
        {name: "banana"}
      ]
    };
    res.send(obj)
  });

}
