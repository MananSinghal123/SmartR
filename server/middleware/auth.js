import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "./catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import jwt from "jsonwebtoken";
require("dotenv").config();
import { redis } from "../utils/redis";

export const isAuthenticated = async (req, res, next) => {
  const access_token = req.cookies.access_token;

  if (!access_token) {
    return next(new ErrorHandler("Please login to access this resource", 400));
  }

  const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN);

  if (!decoded) {
    return next(new ErrorHandler("access token is not valid", 400));
  }
  const user = await redis.get(decoded.id);

  if (!user) {
    return next(new ErrorHandler("Please login to access this resource", 400));
  }

  req.user = JSON.parse(user);

  next();
};
