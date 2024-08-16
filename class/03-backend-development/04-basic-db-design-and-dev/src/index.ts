import express from "express";
import { connectDB, getDB } from "../config/db.js";

const PORT = 8000;
const app = express();

// Open DB connection
await connectDB();
const db = getDB();

app.post("/api/v1/seed", async (req, res) => {
  try {
    await db.query(`CREATE TABLE IF NOT EXISTS president (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      age INT,
      email VARCHAR(50) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`);
    await db.query(`INSERT INTO president (name, age, email) VALUES
      ("Soekarno", 100, "soekarno@gmail.com"),
      ("Soeharto", 100, "soeharto@gmail.com"),
      ("B.J. Habibie", 100, "habibie@gmail.com"),
      ("Abdurrahman Wahid", 100, "gusdur@gmail.com"),
      ("Megawati Soekarnoputri", 77, "megawati@gmail.com"),
      ("Susilo Bambang Yudhoyono", 74, "sby@gmail.com"),
      ("Joko Widodo", 60, "jokowi@gmail.com"),
      ("Prabowo Subianto", 72, "prabowo@gmail.com");
    `);

    res.status(201).json({ message: "Seed data created" });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
