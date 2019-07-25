const uuid = require("uuid/v1");
const dbPromise = require("../db/connect");

module.exports = { get, post, put, patch, del };

function get(id) {
  if (id) {
    return dbPromise.then(db =>
      db
        .get("todos")
        .find({ id })
        .value()
    );
  } else {
    return dbPromise.then(db => db.get("todos").value());
  }
}

function post(newTodo) {
  const id = uuid();
  return dbPromise.then(db =>
    db
      .get("todos")
      .push({ id, ...newTodo })
      .write()
      .then(() => id)
  );
}

function put(id, newTodo) {
  const todo = { id, ...newTodo };
  return dbPromise.then(db =>
    db
      .get("todos")
      .find({ id })
      .assign(todo)
      .write()
      .then(() => todo)
  );
}

function patch(id, newTodo) {
  return dbPromise.then(db => {
    const oldTodo = db
      .get("todos")
      .find({ id })
      .value();
    const todo = { ...oldTodo, ...newTodo };

    return db
      .get("todos")
      .find({ id })
      .assign(todo)
      .write()
      .then(() => todo);
  });
}

function del(id) {
  return dbPromise.then(db =>
    db
      .get("todos")
      .remove({ id })
      .write()
  );
}
