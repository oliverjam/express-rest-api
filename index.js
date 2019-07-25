const express = require("express");
const logger = require("./middleware/logger");
const errors = require("./middleware/errors");
const todos = require("./handlers/todos");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger);
app.get("/", (req, res) => res.json({ message: "Hello world" }));

app.get("/todos/:id", todos.get);
app.use(errors);

/* eslint-disable-next-line no-console */
app.listen(PORT, () => console.log(`➤ Listening on http://localhost:${PORT}`));
