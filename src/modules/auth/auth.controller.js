import authService from "./auth.service.js";
import AppError from "../../utils/AppError.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt.js";

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.login(email, password);

    res.status(200).json({
      status: "success",
      token,
      data: { user },
    });
  } catch (error) {
    next(new AppError(error.message || "Authentication failed", 401));
  }
};

export const logoutController = (req, res, next) => {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: false,
      secure: false,
      sameSite: "none",
    });

    return res.status(200).json({
      success: true,
      message: "Logout Successful",
    });
  } catch (error) {
    next(error);
  }
};

export const meController = async (req, res, next) => {
  try {
    const user = await authService.getMe(req.user.id);
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const refreshTokenController = (req, res, next) => {
  try {
    const newAccessToken = generateAccessToken(req.user);
    const newRefreshToken = generateRefreshToken(req.user);
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: false,
      secure: false,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Access token refreshed successfully",
      accessToken: newAccessToken,
    });
  } catch (error) {
    next(error);
  }
};

export const registerController = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

export const updateMeController = async (req, res, next) => {
  try {
    const updatedUser = await authService.updateMe(req.user.id, req.body);
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: { user: updatedUser },
    });
  } catch (error) {
    next(error);
  }
};
