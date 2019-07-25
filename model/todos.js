const uuid = require("uuid/v1");
const db = require("../db/connect");

module.exports = { get, post };

function get(id) {
  const find = id ? todo => id === todo.id : null;
  return db.get("todos", find);
}

function post(newTodo) {
  const id = uuid();
  return db.push("todos", { ...newTodo, id }).then(() => id);
}
