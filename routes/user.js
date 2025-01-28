import express from "express";
import { handleUserSingup, fetchAllUser, handelUserLogin } from "../controller/user.js";

const userRouter = express.Router();

userRouter.get('/', fetchAllUser)
userRouter.post("/singup", handleUserSingup);
userRouter.post("/login", handelUserLogin)

export { userRouter };
