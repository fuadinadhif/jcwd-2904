import express from "express";
import { confirmEmail, login, register } from "../controllers/auth-controller";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/confirm-email").get(confirmEmail);

export default router;
