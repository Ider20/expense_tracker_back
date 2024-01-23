const express = require("express");
const cors = require("cors");
const { sql } = require("./db.js");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/neon", async (req, res) => {
  const data = await sql`SELECT * FROM playing_with_neon`;
  res.send(data);
});

app.listen(PORT, () => {
  console.log("Application running at http://localhost:" + PORT);
});
