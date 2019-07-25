const todos = require("../model/todos");

module.exports = { get };

function get(req, res) {
  const todo = todos.get(+req.params.id, 10);
  res.json(todo);
}
