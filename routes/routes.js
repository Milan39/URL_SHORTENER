import express from "express";
import { urlRouter } from "./url.js";
 import { userRouter } from "./user.js";

const router = express.Router();

//define all the routers
router.use("/url", urlRouter);
router.use('/user', userRouter);

export { router };
