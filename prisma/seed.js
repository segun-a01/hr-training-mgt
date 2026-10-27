import bcrypt from "bcrypt";
import prisma from "../src/utils/db.js";

async function main() {
  const hashedPassword = await bcrypt.hash("Admin@12345", 10);

  const admin = await prisma.user.upsert({
    where: { email: "mariya@hr.com" },
    update: {},
    create: {
      name: "Mariya Vance",
      email: "mariya@hr.com",
      password: hashedPassword,
      role: "ADMIN",
      department: "Human Resources",
    },
  });

  console.log("Admin seeded successfully:", admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
