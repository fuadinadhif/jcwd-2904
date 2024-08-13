"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const catch_handle_1 = require("./helpers/catch-handle");
const read_write_records_1 = require("./helpers/read-write-records");
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
// Get all records
app.get("/api/v1", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rawRecords = yield (0, read_write_records_1.readRecords)();
        const records = JSON.parse(rawRecords);
        res.status(200).json({
            result: records,
        });
    }
    catch (error) {
        (0, catch_handle_1.catchHandle)(error, res);
    }
}));
// Get total expense by date range
app.get("/api/v1/total-by-cat", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, start_date, end_date } = req.query;
        if (!type || !start_date || !end_date)
            res.status(400).json({ message: "Missing required queries" });
        const rawRecords = yield (0, read_write_records_1.readRecords)();
        if (!rawRecords)
            res.status(404).json({ message: "No records found" });
        const records = JSON.parse(rawRecords);
        const filteredRecords = records.filter((item) => item.type === type && item.date >= start_date && item.date <= end_date);
        const total = filteredRecords.reduce((sum, item) => sum + item.nominal, 0);
        const result = {
            type,
            range: `${start_date} until ${end_date}`,
            total,
        };
        res.status(200).json({ result });
    }
    catch (error) {
        (0, catch_handle_1.catchHandle)(error, res);
    }
}));
// Get total expense by category
// Get record by id
app.get("/api/v1/details/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const rawRecords = yield (0, read_write_records_1.readRecords)();
        if (!rawRecords)
            res.status(404).json({ message: "No records found" });
        const record = JSON.parse(rawRecords).find((item) => item.id === Number(id));
        if (!record)
            throw new Error("No record matches the provided ID");
        res.status(200).json({ result: record });
    }
    catch (error) {
        (0, catch_handle_1.catchHandle)(error, res);
    }
}));
// Create seed data
app.post("/api/v1/seed", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
                nominal: 10000000,
                type: "income",
                category: "salary",
                date: "2024-08-01",
            },
        ];
        yield (0, read_write_records_1.writeRecords)(seedData);
        res.status(201).json({ message: "Seed data created" });
    }
    catch (error) {
        (0, catch_handle_1.catchHandle)(error, res);
    }
}));
// Create record
// Edit record
// Delete record
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
