import express from "express";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
	res.json("HELLO FROM API");
});

export default apiRouter;
