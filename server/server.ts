import * as express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
	res.send("HELLOES FROM SERVER!");
});

app.listen(PORT, () => console.log(`Server now listening at port: ${PORT}`));
