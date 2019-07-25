const { writeFile } = require("fs").promises;
const uuid = require("uuid/v1");
const db = require("../db/connect");

module.exports = { get, post };

function get(id) {
  const todo = db.todos.find(todo => id === todo.id);
  return todo;
}

function post(newTodo) {
  const id = uuid();
  db.todos.push({ ...newTodo, id });
  return writeFile("db.json", JSON.stringify(db), "utf8").then(() => id);
}
