import mongoose from "mongoose";
import userModel from "../model/user.model.js";

export const getUserById = async (id, res) => {
  const userJson = await userModel.findById(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(200).json({
      success: true,
      user,
    });
  }
};
