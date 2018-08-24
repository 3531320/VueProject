module.exports = function (config) {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://" + config.DBconfig, {useMongoClient: true}, function (error) {
    if (error)
    {
      console.log('mongoose connect error:',error);
    }
  });
};
