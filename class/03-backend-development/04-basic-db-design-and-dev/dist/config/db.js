import mysql from "mysql2/promise";
let pool;
export async function connectDB() {
    try {
        pool = mysql.createPool({
            host: "localhost",
            user: "root",
            database: "indonesia",
            password: "sudahlahmysql",
        });
        console.log(`MySQL connected`);
    }
    catch (error) {
        console.error(error);
    }
}
export function getDB() {
    if (!pool) {
        throw new Error("Database connection has not been established.");
    }
    return pool;
}
