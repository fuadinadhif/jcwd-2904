import express from "express";
import {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/user-controller";

const router = express.Router();

router.route("/").get(getAllUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

export default router;
