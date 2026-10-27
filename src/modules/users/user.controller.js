import userService from "./user.service.js";
import AppError from "../../utils/AppError.js";

class UserController {
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({ status: "success", data: { users } });
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  }

  async createUser(req, res, next) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json({ status: "success", data: { user } });
    } catch (error) {
      next(new AppError(error.message, 400));
    }
  }
}

export default new UserController();
