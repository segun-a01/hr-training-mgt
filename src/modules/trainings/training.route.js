import express from "express";
import trainingController from "./training.controller.js";
import authenticate from "../../middlewares/authenticate.js";
import requirePermission from "../../middlewares/requirePermission.js";

const router = express.Router();

router.use(authenticate);

router.get("/", trainingController.getAllTrainings);
router.post("/", requirePermission("ADMIN"), trainingController.createTraining);

export default router;
