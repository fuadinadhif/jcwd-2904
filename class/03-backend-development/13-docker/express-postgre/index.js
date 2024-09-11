const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err) => {
  if (err) {
    console.error("Failed to connect to PostgreSQL:", err);
  } else {
    console.log("Connected to PostgreSQL");
  }
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
