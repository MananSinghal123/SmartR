import express from "express";

import { isAuthenticated } from "../middleware/auth.js";
import {
  activateUser,
  getUserInfo,
  getUserforHelper,
  loginUser,
  logoutUser,
  registrationUser,
} from "../controller/user.controller.js";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login-user", loginUser);
userRouter.get("/logout-user", isAuthenticated, logoutUser);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.get("/user/:id", getUserforHelper);
// userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
// userRouter.put("/update-user-password", isAuthenticated, updatePassword);

export default userRouter;
