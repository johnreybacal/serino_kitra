import { Router } from "express";
import { leaderboardController } from "./controller";

export const leaderboardRouter = Router();
const baseUrl = "/leaderboard"

leaderboardRouter.get(baseUrl, leaderboardController.list)
