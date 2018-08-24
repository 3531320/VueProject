module.exports = function (app) {
  var news = require('../controllers/get/news')
  app.get("/api/news/list", news.getList);




}
