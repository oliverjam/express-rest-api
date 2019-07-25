const { writeFileSync } = require("fs");

let db;

// create a new database json if there isn't one
// for a fresh install this won't exist as db is gitignored
try {
  db = require("./db.json");
} catch (error) {
  const exampleData = { todos: [] };
  writeFileSync("./db/db.json", JSON.stringify(exampleData));
}

module.exports = db;
