"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 5000;
app.get("/", function (req, res) {
    res.send("HELLOES FROM SERVER!");
});
app.listen(PORT, function () { return console.log("Server now listening at port: " + PORT); });
