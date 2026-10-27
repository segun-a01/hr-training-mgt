import express from "express";
import { statDashboardController } from "./admin.controller.js";
import authenticate from "../../middlewares/authenticate.js";
import requirePermission from "../../middlewares/requirePermission.js";

const router = express.Router();

router.use(authenticate);
router.use(requirePermission("ADMIN"));

router.get("/stats", statDashboardController);

export default router;
