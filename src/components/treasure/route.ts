import { Router } from "express";
import { authenticate } from "../../middlewares/authenticate";
import { treasureController } from "./controller";

export const treasureRouter = Router();
const baseUrl = "/treasure"

treasureRouter.get(`${baseUrl}/find`, authenticate, treasureController.find)
