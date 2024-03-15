import userModel from "../model/user.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const isAuthenticated = async (req, res, next) => {
  const access_token = req.cookies.access_token;

  if (!access_token) {
    return next(new ErrorHandler("Please login to access this resource", 400));
  }

  const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN);

  if (!decoded) {
    return next(new ErrorHandler("access token is not valid", 400));
  }
  const user = await userModel.find({ _id: decoded.id });

  // console.log(user[0]);

  if (!user) {
    return next(new ErrorHandler("Please login to access this resource", 400));
  }

  req.user = user;

  next();
};
