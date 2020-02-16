import express from "express";
import apiRouter from "../api/api";

const bodyParser = require("body-parser");
const cors = require("cors");
const errorhandler = require("errorhandler");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", apiRouter);

app.use(errorhandler());

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));
