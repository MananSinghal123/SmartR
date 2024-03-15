import mongoose, { Document, Model, Mongoose, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const emergencyContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name of the person"],
  },
  relation: {
    type: String,
    required: [true, "Please enter your relation with them"],
  },
  contact: {
    type: Number,
    minlength: [10, "Phone no. must be at least 10 characters"],
    required: [true, "Please enter phone no."],
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },

    password: {
      type: String,
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },

    vehicle: {
      type: String,
      required: [true, "Please enter vehicle no."],
    },

    phone: {
      type: Number,
      minlength: [10, "Phone no. must be at least 10 characters"],
      required: [true, "Please enter phone no."],
    },
    address: {
      type: String,
      required: [true, "Please enter correct address"],
    },
    emergencyContact: {
      type: [emergencyContactSchema],
      required: [true, "Please provide Emergency Contact information"],
      minlength: [
        2,
        "Please provide information for at least two emergency contacts",
      ],
    },
  },
  { timestamps: true }
);

//Hash Password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//sign access Token
userSchema.methods.signAccessToken = function () {
  return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN || "");
};

//Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
