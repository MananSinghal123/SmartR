import dotenv from "dotenv";
dotenv.config(); // import { Response } from "express";
// import { IUser } from "../models/user.model";
// import { redis } from "./redis";

export const accessTokenOptions = {
  httpOnly: true,
  sameSite: "lax",
};

export const sendToken = (user, statusCode, res) => {
  const accessToken = user.signAccessToken();

  //upload session to redis

  //parse environment variables to integrate with fallback values

  if (process.env.NODE_ENV === "production") {
    accessTokenOptions.secure = true;
  }

  res.cookie("access_token", accessToken, accessTokenOptions);

  res.status(statusCode).json({
    success: true,
    user,
    accessToken,
  });
};
