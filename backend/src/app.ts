import express, {Request, Response, Application} from "express";

const app: Application = express();

const PORT = 5000;

app.get("/", (req: Request, res: Response) => {
	res.json(6666);
});

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));
