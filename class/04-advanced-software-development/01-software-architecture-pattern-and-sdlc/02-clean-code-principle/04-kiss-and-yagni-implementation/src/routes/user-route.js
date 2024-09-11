import express from "express";
import {
  createUser,
  getAllUser,
  getUserByID,
} from "../controllers/user-controller.js";

const router = express.Router();

router.route("/users").get(getAllUser).post(createUser);
router.route("/users:id").get(getUserByID);

export default router;
