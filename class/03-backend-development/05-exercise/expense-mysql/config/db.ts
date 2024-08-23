import mysql, { Pool } from "mysql2/promise";

let pool: Pool;

export async function connectDB() {
  try {
    pool = mysql.createPool({
      host: "localhost",
      user: "root",
      database: "expense_tracker",
      password: "sudahlahmysql",
    });

    console.log("MySQL connected");
  } catch (error) {
    console.error(error);
  }
}

export function getDB() {
  if (!pool) throw new Error("Database connection has not been established");

  return pool;
}