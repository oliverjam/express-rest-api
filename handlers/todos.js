const todos = require("../model/todos");
const { NotFound } = require("../errors");

module.exports = { get, post, put, patch, del };

function get(req, res, next) {
  todos
    .get(req.params.id)
    .then(todo => {
      res.json(todo);
    })
    .catch(error => {
      next(new NotFound(error));
    });
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

function put(req, res, next) {
  const newTodo = req.body;
  todos
    .put(req.params.id, newTodo)
    .then(todo => {
      console.log(todo);
      res.json(todo);
    })
    .catch(error => {
      error.status = 500;
      next(error);
    });
}

function patch(req, res, next) {
  const newTodo = req.body;
  todos
    .patch(req.params.id, newTodo)
    .then(todo => {
      res.json(todo);
    })
    .catch(error => {
      next(error);
    });
}

function del(req, res, next) {
  todos
    .del(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      error.status = 404;
      next(error);
    });
}
