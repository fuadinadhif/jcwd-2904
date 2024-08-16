"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_middleware_1 = require("./middlewares/auth-middleware");
const not_found_middleware_1 = require("./middlewares/not-found-middleware");
const app = (0, express_1.default)();
const users = [
    { username: "Abdillah", password: "Bismillah" },
    { username: "HambaTuhan", password: "Haleluyah" },
    { username: "Yanto", password: "TambalBanTo!" },
];
app.use(helmet_1.default);
app.use(express_1.default.json());
app.get("/api/v1", (req, res) => {
    res.status(200).json({ message: "Welcome to my paradise" });
});
app.get("/api/v1/public", (req, res) => {
    res.status(200).json({
        message: "This is public route. Everyone could access it without login",
    });
});
app.get("/api/v1/protected", auth_middleware_1.bearerAuthMiddleware, (req, res) => {
    res
        .status(200)
        .json({ message: "If you are here, then you already sign in" });
});
app.post("/api/v1/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((person) => person.username === username);
    if (user && user.password === password) {
        const token = jsonwebtoken_1.default.sign({ username }, "superDuperSafeAndSecretKeyNoOneCantEverGuess", { expiresIn: "1h" });
        res.status(200).json({ token });
    }
    else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});
app.post("/api/v1/logout", (req, res) => {
    res.status(401).json({ message: "You have been logged out" });
});
app.use(not_found_middleware_1.notFoundMiddleware);
app.listen(8000, () => {
    console.log(`Server is listening to port: 8000`);
});
