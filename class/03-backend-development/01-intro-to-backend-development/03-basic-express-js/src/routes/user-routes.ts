import express from "express";

import {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user-controller";

const router = express.Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

export default router;
