module.exports = function (app) {

  require("./routers/post")(app);
  require("./routers/get")(app);
  require("./routers/put")(app);
  require("./routers/delete")(app);

  /*app.get("/admin", function (req, res) {
        res.sendfile("../index.html");
  });*/

};
