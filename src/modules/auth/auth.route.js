import express from "express";
import {
  loginController,
  logoutController,
  meController,
  refreshTokenController,
  registerController,
  updateMeController,
} from "./auth.controller.js"; // ✅ Correct named imports

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/me", meController);
router.post("/refresh-token", refreshTokenController);
router.post("/logout", logoutController);
router.put("/me", updateMeController);

export default router;
