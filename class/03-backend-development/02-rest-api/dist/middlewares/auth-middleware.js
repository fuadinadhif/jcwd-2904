"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicAuthMiddleware = basicAuthMiddleware;
exports.bearerAuthMiddleware = bearerAuthMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function basicAuthMiddleware(req, res, next) {
    // Get authorization property from request headers
    const auth = req.headers["authorization"];
    console.log(auth);
    if (!auth) {
        res.set("WWW-Authenticate", "Basic");
        res.status(401).json({ message: "Authentication required" });
    }
    const credentials = Buffer.from(auth.split(" ")[1], "base64").toString("ascii");
    console.log(credentials);
    const [username, password] = credentials.split(":");
    const validUsername = "user";
    const validPassword = "pass";
    if (username === validUsername && password === validPassword) {
        next();
    }
    else {
        res.status(401).json({ message: "Invalid credentials" });
    }
}
function bearerAuthMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    const token = auth && auth.split(" ")[1];
    if (!token) {
        res.status(401).json({
            message: "No token present",
        });
    }
    jsonwebtoken_1.default.verify(token, "superDuperSafeAndSecretKeyNoOneCantEverGuess", (error, user) => {
        if (error)
            res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
}
