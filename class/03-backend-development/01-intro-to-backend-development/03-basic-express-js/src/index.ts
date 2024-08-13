import express, { Application } from "express";

import userRoutes from "./routes/user-routes";

const PORT = 8080;
const app: Application = express();

// Middleware to read Request body
app.use(express.json());
app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`Express web server is listening on ${PORT}`);
});
