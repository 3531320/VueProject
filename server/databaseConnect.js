const mongoose = require('mongoose');

module.exports = (config) => {
  mongoose.connect("mongodb://" + config.DBconfig, function (error) {
    if (error)
    {
      console.log('mongoose connect error:',error);
    }
  });
  mongoose.Promise = global.Promise
}
