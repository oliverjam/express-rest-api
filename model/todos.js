const uuid = require("uuid/v1");
const db = require("../db/connect");

module.exports = { get, post, put, patch, del };

function get(id) {
  const find = id ? todo => id === todo.id : null;
  return db.get("todos", find);
}

function post(newTodo) {
  const id = uuid();
  return db.push("todos", { id, ...newTodo });
}

function put(id, newTodo) {
  return db
    .remove("todos", todo => todo.id === id)
    .then(() => db.push("todos", { id, ...newTodo }));
}

function patch(id, newTodo) {
  return db
    .remove("todos", todo => todo.id === id)
    .then(
      todo => console.log(todo) || db.push("todos", { ...todo, ...newTodo })
    );
}

function del(id) {
  return db.remove("todos", todo => id === todo.id);
}
