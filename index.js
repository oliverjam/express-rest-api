const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => res.json({ message: "Hello world" }));

app.listen(PORT, () => console.log(`➤ Listening on http://localhost:${PORT}`));
