"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = require("body-parser");
var cors = require("cors");
var errorhandler = require("errorhandler");
var morgan = require("morgan");
var app = express_1.default();
var PORT = 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(errorhandler());
app.get("/api", function (req, res) {
    res.json(6666);
});
app.listen(PORT, function () { return console.log("Server now listening at port: " + PORT); });
//# sourceMappingURL=app.js.map