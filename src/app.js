import express from "express";
import cors from "cors";

import authRouter from "./modules/auth/auth.route.js";
import userRouter from "./modules/users/user.route.js";
import trainingRouter from "./modules/trainings/training.route.js";
import enrollmentRouter from "./modules/enrollments/enrollment.route.js";
import errorHandler from "./middlewares/errorHandler.js";
import adminRouter from "./modules/admin/admin.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/trainings", trainingRouter);
app.use("/api/enrollments", enrollmentRouter);

// Global Error Middleware
app.use(errorHandler);

export default app;
