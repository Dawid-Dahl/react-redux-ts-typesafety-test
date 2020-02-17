import express from "express";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.db", sqlite3.OPEN_READWRITE, err =>
	err ? console.error(err.message) : console.log("Connected to the SQlite database.")
);

const apiRouter = express.Router();

const sqlCountUpdator = (payload: number): string =>
	`UPDATE Counter SET count = ${payload} WHERE id = 1;`;

apiRouter.get("/", (req, res) => {
	db.get("SELECT * FROM Counter", (err, row) =>
		err ? console.error(err) : (console.log(row), res.status(200).json(row.count))
	);
});

apiRouter.post("/", (req, res) => {
	db.serialize(() => {
		db.get("SELECT * FROM Counter", (err, row) => {
			if (err) {
				console.error(err);
			} else {
				const oldCount = row.count;
				const newCount = req.body.count;
				const combinedCount = oldCount + newCount;
				const sql = sqlCountUpdator(combinedCount);
				db.run(sql, err =>
					err ? console.error(err) : console.log(`Count updated: ${combinedCount}`)
				);
				db.get("SELECT * FROM Counter", (err, row) =>
					err ? console.error(err) : (console.log(row), res.status(201).json(row.count))
				);
			}
		});
	});
});

export default apiRouter;
