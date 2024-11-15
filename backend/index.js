const express = require("express");
// const morgan = require("morgan");
const app = express();
const port = 3000;
const knex = require("./db/knex");

app.get("/", (req, res) => {
  res.send("Homeページアクセスできてます");
});

app.get("/api/matches", async (req, res) => {
  try {
    const profile = await knex("match").select("*");
    console.log(profile);
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: "Failed to get profile" });
  }
});

app.post("/api/matches", async (req, res) => {
  try {
    const profile = await knex("match").select("*");
    console.log(profile);
    res.status(201).send(nody);
  } catch (err) {
    res.status(500).json({ error: "Failed to get todos" });
  }
});

app.listen(port, () => {
  console.log(port);
  console.log(`Server is running on http://localhost:${port}`);
});

// module.exports = app;
