import express, { Application } from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";

import {
  basicAuthMiddleware,
  bearerAuthMiddleware,
} from "./middlewares/auth-middleware";
import { notFoundMiddleware } from "./middlewares/not-found-middleware";

const app: Application = express();
const users = [
  { username: "Abdillah", password: "Bismillah" },
  { username: "HambaTuhan", password: "Haleluyah" },
  { username: "Yanto", password: "TambalBanTo!" },
];

app.use(helmet);
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.status(200).json({ message: "Welcome to my paradise" });
});

app.get("/api/v1/public", (req, res) => {
  res.status(200).json({
    message: "This is public route. Everyone could access it without login",
  });
});

app.get("/api/v1/protected", bearerAuthMiddleware, (req, res) => {
  res
    .status(200)
    .json({ message: "If you are here, then you already sign in" });
});

app.post("/api/v1/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((person) => person.username === username);

  if (user && user.password === password) {
    const token = jwt.sign(
      { username },
      "superDuperSafeAndSecretKeyNoOneCantEverGuess",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.post("/api/v1/logout", (req, res) => {
  res.status(401).json({ message: "You have been logged out" });
});

app.use(notFoundMiddleware);

app.listen(8000, () => {
  console.log(`Server is listening to port: 8000`);
});
