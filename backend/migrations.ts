import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.db", err => {
	if (err) {
		return console.error(err.message);
	}
	console.log("Connected to the SQlite database.");
});

db.serialize(() => {
	enum tables {
		counter = "Counter"
	}
	/* db.run(
		`CREATE TABLE IF NOT EXISTS ${tables.counter} (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "value" INTEGER NOT NULL
    );`,
		err => {
			err
				? console.error(err.message)
				: console.log(`Table ${tables.counter} added successfully`);
		}
	); */
	const sql = "ALTER TABLE Counter RENAME COLUMN count TO count";
	db.run(sql, err => {
		err ? console.error(err.message) : console.log(`Column altered!`);
	});
});

db.close(err =>
	err ? console.error(err.message) : console.log("Closed the database connection.")
);
