const db = require("./db.json");

module.exports = { get };

function get(id) {
  const todo = db.todos.find(todo => id === todo.id);
  return todo;
}
