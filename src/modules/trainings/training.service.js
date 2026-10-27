import prisma from "../../utils/db.js";

class TrainingService {
  async getAllTrainings() {
    return await prisma.trainingModule.findMany();
  }

  async createTraining(data) {
    return await prisma.trainingModule.create({ data });
  }
}

export default new TrainingService();
