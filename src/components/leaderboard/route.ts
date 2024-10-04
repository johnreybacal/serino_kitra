import { Router } from "express";
import { leaderboardController } from "./controller";

export const leaderboardRouter = Router();
const baseUrl = "/leaderboards"

leaderboardRouter.get(baseUrl, leaderboardController.list)
