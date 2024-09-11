import express from "express";

import userRoute from "./routes/user-route";

const PORT = 8000;
const app = express();

app.use("/api/v1/users", userRoute);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
}

export default app;
