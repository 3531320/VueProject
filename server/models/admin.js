var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var adminSchema = new Schema({
    name: { type: String, default: "" },
    password: { type: String, default: "" }
}, {
    collection: 'admin'
});

module.exports = mongoose.model('adminModel', adminSchema);