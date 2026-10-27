import AppError from "../utils/AppError.js";

const requirePermission = (permission) => {
  return (req, res, next) => {
    // Single Admin has full wildcard access; expand per permission mapping if needed
    if (req.user && req.user.role === "ADMIN") {
      return next();
    }
    return next(
      new AppError(
        "You do not have the required permission for this action.",
        403,
      ),
    );
  };
};

export default requirePermission;
