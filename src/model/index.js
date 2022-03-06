const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db_path = path.join(__dirname, "../database", "database.db");
const db = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Successful connected to the database");
});

db.serialize(function () {
  db.run(
    `CREATE TABLE IF NOT EXISTS annuaires(id integer primary key autoincrement,latitude1 TEXT, longitude1 TEXT,latitude2 TEXT, longitude2 TEXT,latitude3 TEXT, longitude3 TEXT,result_housenumber TEXT, result_name TEXT ,result_postcode TEXT,result_city TEXT ,departement TEXT )`
  );
  db.run(
    `CREATE TABLE IF NOT EXISTS files(id integer primary key autoincrement,name TEXT,path TEXT,size integer,createdAt TEXT )`
  );
});

module.exports = db;
