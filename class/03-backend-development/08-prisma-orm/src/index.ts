import express from "express";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth-route";
import postRouter from "./routes/post-route";
import userRouter from "./routes/user-route";
import { verifyToken, adminGuard } from "./middlewares/auth-middleware";

const PORT = process.env.PORT || 8080;
const app = express();

// Read req.body
app.use(express.json());
// Read req.cookies
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", verifyToken, adminGuard, postRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
