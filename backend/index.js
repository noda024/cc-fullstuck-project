const express = require("express");
// const morgan = require("morgan");
const app = express();
const port = 3000;
const knex = require("./db/knex");

app.use(express.json());
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

// 今回は固定値に(というのも今の機能では画像が表示されなくなったりするため)
app.post("/api/matches", async (req, res) => {
  console.log(req.body);
  try {
    const profile = await knex("match").insert({
      id: 999,
      name: "test",
      sex: req.body.name,
      age: 10,
      born: "zoo",
      description: "I am 象",
      good: ["2"],
      image_path: "ele.png",
    });
    // console.log(profile);
    res.status(201).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to insert profile" });
  }
});

app.listen(port, () => {
  console.log(port);
  console.log(`Server is running on http://localhost:${port}`);
});

// module.exports = app;
