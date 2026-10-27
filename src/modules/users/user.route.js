import express from "express";
import userController from "./user.controller.js";
import authenticate from "../../middlewares/authenticate.js";
import requirePermission from "../../middlewares/requirePermission.js";

const router = express.Router();

router.use(authenticate);

router.get("/", userController.getAllUsers);
router.post("/", requirePermission("ADMIN"), userController.createUser);

export default router;
