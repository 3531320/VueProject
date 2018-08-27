module.exports = function (app, config, apiRouter) {
  var news = require('../controllers/get/news');
  app.get("/api/user/list", news.getList);




}
