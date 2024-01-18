import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Request, Response, NextFunction } from "express";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/v1", userRouter);

// app.get("/test", (req, res, next) => {
//   res.status(200).json({
//     success: true,
//     message: "API is working",
//   });
// });

// app.all("*", (req, res, next) => {
//   const err = new Error(`Route ${req.originalUrl} not found`) as any;
//   err.statusCode = 404;
//   next(err);
// });

// app.use(ErrorMiddleware);
