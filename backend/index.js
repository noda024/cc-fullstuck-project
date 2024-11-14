const express = require("express");
// const morgan = require("morgan");
const app = express();
const port = 3000;

// app.use(express.json());

const knex = require("./db/knex");

// app.get('')
// const todos = await knex("todos", async (req, res) => {});

// const knex = require("./db/knex");
app.get("/", (req, res) => {
  res.send("Homeページアクセスできてます");
});

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await knex("todos").select("*");
    console.log(todos);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to get todos" });
  }
});

app.listen(port, () => {
  console.log(port);
  console.log(`Server is running on http://localhost:${port}`);
});

// module.exports = app;
