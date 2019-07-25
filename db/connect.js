const { writeFileSync } = require("fs");

let db;

function save(data) {
  writeFileSync("./db/db.json", JSON.stringify(data));
}

// create a new database json if there isn't one
// for a fresh install this won't exist as db is gitignored
try {
  db = require("./db.json");
} catch (error) {
  const defaultData = { todos: [] };
  save(defaultData);
}

function get(key, find) {
  return new Promise((resolve, reject) => {
    const array = db[key];
    if (!array) {
      return reject(new Error(`${key} not found`));
    }
    const value = find ? array.find(find) : array;
    if (!value) {
      return reject(new Error(`No match found in ${key}`));
    }
    resolve(value);
  });
}

function push(key, value) {
  return new Promise((resolve, reject) => {
    try {
      const array = db[key];
      if (!array) {
        const error = new Error(`${key} not found`);
        return reject(error);
      }
      array.push(value);
      save(db);
      return resolve(value);
    } catch (error) {
      return reject(error);
    }
  });
}

function remove(key, find) {
  return new Promise((resolve, reject) => {
    try {
      const array = db[key];
      if (!array) {
        const error = new Error(`${key} not found`);
        return reject(error);
      }
      db[key] = array.filter(find);
      save(db);
      return resolve();
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { get, push, remove };
