"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const PORT = 8080;
const app = (0, express_1.default)();
// Middleware to read Request body
app.use(express_1.default.json());
app.use("/api/v1", user_routes_1.default);
app.listen(PORT, () => {
    console.log(`Express web server is listening on ${PORT}`);
});
