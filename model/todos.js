const uuid = require("uuid/v1");
const db = require("../db/connect");

module.exports = { get, post, put, del };

function get(id) {
  const find = id ? todo => id === todo.id : null;
  return db.get("todos", find);
}

function post(newTodo) {
  const id = uuid();
  return db.push("todos", { ...newTodo, id });
}

function put(id, newTodo) {
  return db
    .get("todos", todo => todo.id === id)
    .then(todo => db.push("todos", { ...todo, ...newTodo }));
}

function del(id) {
  return db.remove("todos", todo => id === todo.id);
}
