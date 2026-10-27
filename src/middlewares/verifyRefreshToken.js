import AppError from "../utils/AppError.js";
import { verifyRefreshToken as verifyToken } from "../utils/jwt.js";

const verifyRefreshToken = (req, res, next) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return next(new AppError("Refresh token is required", 400));
  }

  try {
    const decoded = verifyToken(refreshToken);
    req.user = decoded;
    next();
  } catch (error) {
    next(new AppError("Invalid or expired refresh token", 401));
  }
};

export default verifyRefreshToken;
