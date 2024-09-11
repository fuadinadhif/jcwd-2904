import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth-route";
import postRouter from "./routes/post-route";
import userRouter from "./routes/user-route";
import { verifyToken, adminGuard } from "./middlewares/auth-middleware";
import { notFound } from "./middlewares/not-found-middleware";
import { error } from "./middlewares/error-middleware";

const PORT = process.env.PORT || 8080;
const app = express();

// Read req.body
app.use(express.json());
// Read req.cookies
app.use(cookieParser());
// Allow CORS
/*
app.use((req, res, next) => {
  const allowedOrigins = ["http://a.com", "http://b.com"];
  const origin = req.headers.origin as string;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  // Allow access from our Next.js front-end
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  // Allow the following headers
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Allow the following methods
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  // Allow credentials (cookies) to be included
  res.header("Access-Control-Allow-Credentials", "true");

  // Handle preflight request
  if (req.method === "OPTIONS") return res.sendStatus(200);

  next();
});
*/
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true,
  })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", verifyToken, postRouter);
app.use("/api/v1/users", userRouter);

app.use(notFound);
app.use(error);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
