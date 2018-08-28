module.exports = function(app) {
    var user = require('../controllers/post/user');
    app.post("/api/submit", user.submit); //创建用户

}