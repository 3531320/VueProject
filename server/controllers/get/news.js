var News = require('../../models/news');

exports.getList = function (req, res) {
  News.find({},"title status created type content url images").sort({created:-1}).limit(10).lean().exec(function (error, news) {
    if (error) {
      return res.status(500).send(error);
    }
    else {
      res.status(200).send({news: news});
    }
  });

};
