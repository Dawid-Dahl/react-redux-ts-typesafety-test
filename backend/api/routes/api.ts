import express from "express";
import * as apiController from "../controllers/api";

const apiRouter = express.Router();

apiRouter.get("/", apiController.apiFetchCount);

apiRouter.post("/", apiController.apiSetCount);

export default apiRouter;
