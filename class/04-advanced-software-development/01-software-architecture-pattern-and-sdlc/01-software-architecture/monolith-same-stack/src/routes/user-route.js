import express from "express";
import { getAllUser, getHomePage } from "../controllers/user-controller.js";

const router = express.Router();

router.route("/").get(getHomePage);
router.route("/users").get(getAllUser);

export default router;
