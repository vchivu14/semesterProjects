import db from "../database/createMySQLConnection.js";

db.query(`INSERT INTO players (name) VALUES ('Malte)`, (err, data) => {
    console.log(data);
    db.end();
});

// const {error, data} = await db.query(`INSERT INTO players (name) VALUES ('Malte)`);
// console.log(data);
// db.end();

// const {error, data} = await db.query(`SELECT * FROM players`);
// console.log(data);
// db.end();