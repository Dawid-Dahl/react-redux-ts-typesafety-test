import express, {Request, Response, Application} from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const errorhandler = require("errorhandler");
const morgan = require("morgan");

const app: Application = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(errorhandler());

app.get("/api", (req: Request, res: Response) => {
	res.json(666);
});

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));
