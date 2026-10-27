import prisma from "../../utils/db.js";
import AppError from "../../utils/AppError.js";

class EnrollmentService {
  async createEnrollment(data) {
    const { userId, trainingId } = data;

    // Check if enrollment already exists using trainingModuleId
    const existing = await prisma.enrollment.findFirst({
      where: {
        userId,
        trainingModuleId: trainingId,
      },
    });

    if (existing) {
      throw new AppError("User is already enrolled in this training", 400);
    }

    // Create enrollment using Prisma relation connections
    return await prisma.enrollment.create({
      data: {
        user: {
          connect: { id: userId },
        },
        trainingModule: {
          connect: { id: trainingId },
        },
      },
    });
  }
}

export default new EnrollmentService();
