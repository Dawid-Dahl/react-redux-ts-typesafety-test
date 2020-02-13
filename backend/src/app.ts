import express, {Request, Response, Application} from "express";
var cors = require("cors");

const app: Application = express();

const PORT = 5000;

app.use(cors());

app.get("/api", (req: Request, res: Response) => {
	res.json(6666);
});

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));
