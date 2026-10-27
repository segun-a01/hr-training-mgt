import AppError from "../utils/AppError.js";

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorMessage = result.error.errors.map((e) => e.message).join(", ");
    return next(new AppError(errorMessage, 400));
  }
  req.body = result.data;
  next();
};

export default validate;
