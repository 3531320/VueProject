var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var newsSchema = new Schema({
    title:{type:String,default:""},
    url:{type:String,default:""},
    type:{type:String,default:""},// "0"工作动态  "1">通知公告 "2">区县风采 "3">媒体聚焦 "4">三农要闻
    images:{type:[],default:[]},
    content:{type:String,default:""},
    created:{type:Date,default:Date.now},
    updated:{type:Date,default:Date.now},
    status:{type:Number,default:""} //0:草稿  1:发布
}, {
  collection: "news"
});
newsSchema.pre("update", function (next) {
    var cls = this,
        version = cls.version;
    cls.version = version + 1;
    cls.updated = Date.now();
    next();
});

newsSchema.pre("save", function (next) {
    var cls = this,
        version = cls.version;
    if (!cls._id) {
        cls.created = Date.now;
    }
    cls.version = version + 1;
    cls.updated = Date.now;

    next();
});
module.exports = mongoose.model("newsModel", newsSchema);