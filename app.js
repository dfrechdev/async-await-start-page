var express = require("express");
var app = express();
var path = require("path");

// define static routes
app.use("/static", express.static("static"));
app.use(express.static("app"));

// set main route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/app/index.html"));
});

// start server
app.listen(3001, function() {
    console.log("Start page available on http://localhost:3001/");
});
