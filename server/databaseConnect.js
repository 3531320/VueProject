
module.exports = (config) => {
  var mongoose = require('mongoose');
  mongoose.connect("mongodb://" + config.DBconfig,function (error) {
    if (error) {
      console.log('mongoose error:',error);
    }else {
      console.log("mongoose connect success")
    }
  });
  mongoose.Promise = global.Promise
}
