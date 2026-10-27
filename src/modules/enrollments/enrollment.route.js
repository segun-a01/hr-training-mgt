import express from "express";
import enrollmentController from "./enrollment.controller.js";
import authenticate from "../../middlewares/authenticate.js";
import requirePermission from "../../middlewares/requirePermission.js";

const router = express.Router();

router.use(authenticate);

router.get("/", enrollmentController.getEnrollments);
router.post(
  "/",
  requirePermission("ADMIN"),
  enrollmentController.createEnrollment,
);

export default router;
