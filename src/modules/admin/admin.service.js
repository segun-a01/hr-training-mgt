import prisma from "../../utils/db.js";

export const statDashboard = async () => {
  const totalUsers = await prisma.user.count();
  const totalTrainings = await prisma.trainingModule.count();
  const totalEnrollments = await prisma.enrollment.count();

  return {
    totalUsers,
    totalTrainings,
    totalEnrollments,
  };
};
