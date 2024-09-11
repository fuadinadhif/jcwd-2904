import express from "express";

import userRoute from "./routes/user-route.js";

const PORT = 8888;
const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");

app.use("/", userRoute);

app.listen(PORT, () => console.log(`Server is listening on: ${PORT}`));
