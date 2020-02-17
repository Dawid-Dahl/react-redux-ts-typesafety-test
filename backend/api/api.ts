import express from "express";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.db", sqlite3.OPEN_READWRITE, err =>
	err ? console.error(err.message) : console.log("Connected to the SQlite database.")
);

const apiRouter = express.Router();

const sqlCountUpdator = (payload: number): string =>
	`UPDATE Counter SET count = ${payload} WHERE id = 0;`;

apiRouter.get("/", (req, res) => {
	db.get("SELECT * FROM Counter", (err, row) =>
		err ? console.error(err) : (console.log(row), res.status(200).json(row.count))
	);
});

apiRouter.post("/", (req, res) => {
	/* db.serialize(() => {
		const sqlRun = sqlCountUpdator(req.body);
		const sqlGet = `SELECT count FROM Count;`;
		db.run(sqlRun, err =>
			err ? console.error(err) : console.log(`Count updated: ${req.body}`)
		).get(sqlGet, (err, row) =>
			err
				? console.error(err)
				: row
				? console.log(row.id, row.count)
				: console.log("No row was found")
		);
	}); */
});

export default apiRouter;
