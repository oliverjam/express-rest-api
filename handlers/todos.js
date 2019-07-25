const todos = require("../model/todos");

module.exports = { get, post, put };

function get(req, res, next) {
  todos
    .get(req.params.id)
    .then(todo => {
      res.json(todo);
    })
    .catch(error => {
      error.status = 404;
      next(error);
    });
}

function post(req, res, next) {
  const newTodo = req.body;
  todos
    .post(newTodo)
    .then(todo => {
      res.location(`http://localhost:3000/todos/${todo.id}`);
      res.status(201).send();
    })
    .catch(error => {
      error.status = 500;
      next(error);
    });
}

function put(req, res, next) {
  const newTodo = req.body;
  todos
    .put(req.params.id, newTodo)
    .then(todo => {
      res.json(todo);
    })
    .catch(error => {
      error.status = 500;
      next(error);
    });
}
