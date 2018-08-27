module.exports = function (app, config, apiRouter) {
  var news = require('../controllers/get/news');
  app.get("/api/news/list", news.getList);




}
