const mongoose = require('mongoose');

// 连接本地数据库1
/*module.exports = (config) => {
  mongoose.connect("mongodb://" + config.DBconfig,function (error) {
    if (error) {
      console.log('mongoose error:',error);
    }else {
      console.log("mongoose connect success")
    }
  });
  mongoose.Promise = global.Promise
}*/

// ES6 写法连接数据库
module.exports = (config) => {
  mongoose.connect(`mongodb://${config.dev.host}/${config.dev.dbname}`,
    err => {
      if (err) {
        return console.error('■mongo connect error■', err)
      }
      console.log('■mongodb connect success !')
    });
  mongoose.Promise = global.Promise
};
