const todos = require("../model/todos");

module.exports = { get, post };

function get(req, res, next) {
  todos
    .get(req.params.id)
    .then(todo => {
      res.json(todo);
    })
    .catch(next);
}

function post(req, res, next) {
  const newTodo = req.body;
  todos
    .post(newTodo)
    .then(id => {
      res.location(`http://localhost:3000/todos/${id}`);
      res.status(201).send();
    })
    .catch(error => {
      error.status = 500;
      next(error);
    });
}
