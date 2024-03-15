import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import sendMail from "../utils/sendMail.js";
import { sendToken } from "../utils/jwt.js";
import userModel from "../model/user.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { CatchAsyncError } from "../middleware/CatchAsyncError.js";
import { getUserById } from "../services/user.service.js";

export const registrationUser = CatchAsyncError(async (req, res, next) => {
  try {
    const { name, email, password, vehicle, phone, address, emergencyContact } =
      req.body;
    const isEmailExist = await userModel.findOne({ email });
    if (isEmailExist) {
      return next(new ErrorHandler("Email already exist", 400));
    }

    const user = {
      name,
      email,
      password,
      vehicle,
      phone,
      address,
      emergencyContact,
    };

    const activationToken = createActivationToken(user);
    const activationCode = activationToken.activationCode;
    const data = { user: { name: user.name }, otp: activationCode };

    try {
      await sendMail({
        email: user.email,
        subject: "Activation OTP",
        template: "activation-mail.ejs",
        data,
      });

      res.status(201).json({
        success: true,
        message: `Please check your email: ${user.email} to activate your account`,
        activationToken: activationToken.token,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

export const createActivationToken = (user) => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = jwt.sign(
    {
      user,
      activationCode,
    },
    process.env.ACTIVATION_SECRET
  );

  return { token, activationCode };
};

export const activateUser = CatchAsyncError(async (req, res, next) => {
  try {
    const { activation_token, activation_code } = req.body;
    const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

    if (newUser.activationCode != activation_code) {
      return next(new ErrorHandler("Invalid activation code", 400));
    }

    const { name, email, password, vehicle, phone, address, emergencyContact } =
      newUser.user;
    const existUser = await userModel.findOne({ email });

    if (existUser) {
      return next(new ErrorHandler("Email already exist", 400));
    }

    const user = await userModel.create({
      name,
      email,
      password,
      vehicle,
      phone,
      address,
      emergencyContact,
    });

    user.save();
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

//Login user

export const loginUser = CatchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please enter email and Password", 400));
    }

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 400));
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return next(new ErrorHandler("Invalid email or password", 400));
    }
    sendToken(user, 200, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

//logout user
export const logoutUser = CatchAsyncError(async (req, res, next) => {
  try {
    res.cookie("access_token", "", { maxAge: 1 });

    res.status(200).json({
      success: true,
      message: "Logged out Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

//get user info
export const getUserInfo = CatchAsyncError(async (req, res, next) => {
  try {
    res.status(200).json({
      user: req.user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

export const getUserforHelper = CatchAsyncError(async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json({
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// //update user info

// export const updateUserInfo = CatchAsyncError(async (req, res, next) => {
//   try {
//     const { name, email } = req.body;
//     const userId = req.user?._id;
//     const user = await userModel.findById(userId);

//     if (email && user) {
//       const isEmailExist = await userModel.findOne({ email });
//       if (isEmailExist) {
//         return next(new ErrorHandler("Email already exist", 400));
//       }
//       user.email = email;
//     }

//     if (name && user) {
//       user.name = name;
//     }

//     await user?.save();

//     await redis.set(userId, JSON.stringify(user));

//     res.status(201).json({
//       success: true,
//       user,
//     });
//   } catch (error) {}
// });

// //update user password

// export const updatePassword = CatchAsyncError(async (req, res, next) => {
//   try {
//     const { oldPassword, newPassword } = req.body;

//     if (!oldPassword || !newPassword) {
//       return next(new ErrorHandler("Please Enter old and new password", 400));
//     }

//     const user = await userModel.findById(req.user?._id).select("+password");

//     if (user?.password === undefined) {
//       return next(new ErrorHandler("Invalid user", 400));
//     }

//     const isPasswordMatch = await user?.comparePassword(oldPassword);

//     if (!isPasswordMatch) {
//       return next(new ErrorHandler("Invalid old password", 400));
//     }

//     user.password = newPassword;

//     await user.save();

//     await redis.set(req.user?._id, JSON.stringify(user));

//     res.status(201).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     return next(new ErrorHandler(error.message, 400));
//   }
// });
