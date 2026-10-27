import enrollmentService from "./enrollment.service.js";
import AppError from "../../utils/AppError.js";

class EnrollmentController {
  async getEnrollments(req, res, next) {
    try {
      const enrollments = await enrollmentService.getEnrollments();
      res.status(200).json({ status: "success", data: { enrollments } });
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  }

  async createEnrollment(req, res, next) {
    try {
      const enrollment = await enrollmentService.createEnrollment(req.body);
      res.status(201).json({ status: "success", data: { enrollment } });
    } catch (error) {
      next(new AppError(error.message, 400));
    }
  }
}

export default new EnrollmentController();
