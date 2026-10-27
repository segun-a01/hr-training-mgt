import trainingService from "./training.service.js";
import AppError from "../../utils/AppError.js";

class TrainingController {
  async getAllTrainings(req, res, next) {
    try {
      const trainings = await trainingService.getAllTrainings();
      res.status(200).json({ status: "success", data: { trainings } });
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  }

  async createTraining(req, res, next) {
    try {
      const training = await trainingService.createTraining(req.body);
      res.status(201).json({ status: "success", data: { training } });
    } catch (error) {
      next(new AppError(error.message, 400));
    }
  }
}

export default new TrainingController();
