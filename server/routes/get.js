module.exports = function(app, config, apiRouter) {
    var user = require('../controllers/get/user');
    app.get("/api/user/list", user.getList);
    app.get("/api/user/list/:id", user.userDetails);


}