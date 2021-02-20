var express = require("express");
var app = express();
var fs = require("fs");

const port = process.env.PORT || 8000;

app.get("/listUsers", function (req, res) {
  console.log("🚀 ~ file: App.js ~ line 6 ~ req", req);
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

app.get("/", function (req, res) {
  res.send("Hello World! Test more Updates code");
});

app.post("/addUser", function (req, res) {
  res.send("request ->>>>>>>", req.body);
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
