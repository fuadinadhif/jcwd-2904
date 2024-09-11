import express from "express";

import userRoute from "./routes/user-route.js";
import { complexLog } from "./helpers/index.js";
// import { catchHandle } from "./helpers/catch-handle";
// import { complexLog } from "./helpers/complex-log";
// import { fetchUsers } from "./helpers/fetch-users";

const app = express();

app.use("/", userRoute);

// Start the server
app.listen(8000, () => complexLog("Server started on port 8000"));
