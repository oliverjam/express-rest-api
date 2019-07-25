const uuid = require("uuid/v1");
const db = require("../db/connect");

module.exports = { get, post };

function get(id) {
  return db.get("todos", todo => id === todo.id);
}

function post(newTodo) {
  const id = uuid();
  return db.push("todos", { ...newTodo, id }).then(() => id);
}
