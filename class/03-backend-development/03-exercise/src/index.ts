import express, { Response, Request, Application } from "express";
import fs from "fs/promises";

import { catchHandle } from "./helpers/catch-handle";
import { readRecords, writeRecords } from "./helpers/read-write-records";

const PORT = process.env.PORT || 8080;
const app = express();

// Get all records
app.get("/api/v1", async (req: Request, res: Response) => {
  try {
    const rawRecords = await readRecords();
    const records = JSON.parse(rawRecords);

    res.status(200).json({
      result: records,
    });
  } catch (error) {
    catchHandle(error, res);
  }
});

// Get total expense by date range
app.get("/api/v1/total-by-cat", async (req: Request, res: Response) => {
  try {
    const { type, start_date, end_date } = req.query;

    if (!type || !start_date || !end_date)
      res.status(400).json({ message: "Missing required queries" });

    const rawRecords = await readRecords();

    if (!rawRecords) res.status(404).json({ message: "No records found" });

    const records = JSON.parse(rawRecords);
    const filteredRecords = records.filter(
      (item: { type: string; date: string }) =>
        item.type === type && item.date >= start_date! && item.date <= end_date!
    );
    const total = filteredRecords.reduce(
      (sum: number, item: { nominal: number }) => sum + item.nominal,
      0
    );
    const result = {
      type,
      range: `${start_date} until ${end_date}`,
      total,
    };

    res.status(200).json({ result });
  } catch (error) {
    catchHandle(error, res);
  }
});

// Get total expense by category

// Get record by id
app.get("/api/v1/details/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const rawRecords = await readRecords();

    if (!rawRecords) res.status(404).json({ message: "No records found" });

    const record = JSON.parse(rawRecords).find(
      (item: { id: number }) => item.id === Number(id)
    );

    if (!record) throw new Error("No record matches the provided ID");

    res.status(200).json({ result: record });
  } catch (error) {
    catchHandle(error, res);
  }
});

// Create seed data
app.post("/api/v1/seed", async (req: Request, res: Response) => {
  try {
    const seedData = [
      {
        id: 1,
        title: "Nasi Padang",
        nominal: 16000,
        type: "expense",
        category: "food",
        date: "2024-08-12",
      },
      {
        id: 2,
        title: "Basreng",
        nominal: 5000,
        type: "expense",
        category: "food",
        date: "2024-08-13",
      },
      {
        id: 3,
        title: "Sangu Orang Tua",
        nominal: 10_000_000,
        type: "income",
        category: "salary",
        date: "2024-08-01",
      },
    ];

    await writeRecords(seedData);

    res.status(201).json({ message: "Seed data created" });
  } catch (error) {
    catchHandle(error, res);
  }
});

// Create record

// Edit record

// Delete record

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
