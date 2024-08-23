import express from "express";

import authRouter from "./routes/auth-route";
import postRouter from "./routes/post-route";
import userRouter from "./routes/user-route";
import { verifyToken, adminGuard } from "./middlewares/auth-middleware";

const PORT = 8080;
const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", verifyToken, adminGuard, postRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
