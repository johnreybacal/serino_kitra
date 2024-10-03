import { Router } from "express";
import { userController } from "./controller";

export const userRouter = Router();
const baseUrl = "/users"

userRouter.post(`${baseUrl}/login`, userController.login)
