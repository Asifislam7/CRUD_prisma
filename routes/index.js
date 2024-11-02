import { Router } from "express";
import userRouter from './userRoutes.js'
const router =  Router();

router.use("/api/user", userRouter);
// this is the main route file



export default router;