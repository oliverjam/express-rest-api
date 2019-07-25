const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");
const Memory = require("lowdb/adapters/Memory");

const db = low(
  process.env.NODE_ENV === "test"
    ? new Memory()
    : new FileAsync("./db/db.json", { defaultValue: { todos: [] } })
);

module.exports = db;
