import {Request, Response} from "express";
import sqlite3 from "sqlite3";
import {sqlCountUpdator} from "../utils/utils";

const db = new sqlite3.Database("database.db", sqlite3.OPEN_READWRITE, err =>
	err ? console.error(err.message) : console.log("Connected to the SQlite database.")
);

export const apiFetchCount = (req: Request, res: Response) => {
	db.get("SELECT * FROM Counter", (err, row) =>
		err ? console.error(err) : res.status(200).json(row.count)
	);
};

export const apiSetCount = (req: Request, res: Response) => {
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
};
