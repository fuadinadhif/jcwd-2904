// import express from "express";

// import { connectDB, getDB } from "../config/db.js";

// const PORT = 8080;
// const app = express();

// await connectDB();
// const db = getDB();

// app.post("/api/v1/transactions/seed", async (req, res) => {
//   try {
//     await db.query(`
//       CREATE TABLE IF NOT EXISTS transactions (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         title VARCHAR(50) NOT NULL,
//         nominal DECIMAL(10, 2) NOT NULL,
//         type ENUM("income", "expense") NOT NULL,
//         category VARCHAR(50) NOT NULL,
//         date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
//       );
//     `);
//     await db.query(`
//       INSERT INTO transactions (title, nominal, type, category)
//       VALUES
//       ('Salary', 5000.00, 'income', 'employment'),
//       ('Rent', 1000, 'expense', 'housing')
//     `);

//     res.status(201).json({ message: "Seed data created" });
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.listen(PORT, () => console.log("Server on!"));

// import express from "express";
// import { connectDB, getDB } from "../config/db.js";

// const PORT = 8080;
// const app = express();

// await connectDB();
// const db = getDB();

// app.post("/api/v1/transactions/seed", async (req, res) => {
//   try {
//     await db.query(`
//       CREATE TABLE IF NOT EXISTS transactions(
//         id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
//         title VARCHAR(50) NOT NULL,
//         nominal DECIMAL(10,2) NOT NULL,
//         type ENUM("income","expense") NOT NULL,
//         category SET("makan","minum","apaanaja") NOT NULL,
//         date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         updated_at TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
//       );`);

//     await db.query(`
//         INSERT INTO transactions (title, nominal, type, category)
//         VALUES
//         ('Salary', 5000.00, 'income', 'makan'),
//         ('Rent', 1000, 'expense', 'minum');
//     `);

//     res.status(201).json({ message: "Seed data created" });
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.listen(PORT, () => {
//   console.log("server on!");
// });

import express from "express";
import { connectDB, getDB } from "../config/db.js";

const PORT = 8080;
const app = express();

await connectDB();
const db = getDB();

app.post("/api/v1/transactions/seed", async (req, res) => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS transactions(
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        title VARCHAR(50) NOT NULL, 
        nominal DECIMAL(10,2) NOT NULL, 
        type ENUM ("income","expense") NOT NULL, 
        category ENUM("housing","employment"), 
        date TIMESTAMP DEFAULT  CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
      );`);

    await db.query(`
        insert into transactions(title, nominal, type, category)
        VALUES ('Salary', 5000.00, 'income', 'employment')

         `);

    res.status(201).json({ message: "Seed data created" });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log("server go!");
});
