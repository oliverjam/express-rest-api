const express = require("express");
const todos = require("./handlers/todos");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => res.json({ message: "Hello world" }));

app.get("/todos/:id", todos.get);
app.listen(PORT, () => console.log(`➤ Listening on http://localhost:${PORT}`));
