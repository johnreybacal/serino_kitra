import { Request, Response } from "express";
import { leaderboardService } from "./service";

class Controller {
    list = async (req: Request, res: Response) => {
        const leaderboard = await leaderboardService.list();

        res.send(leaderboard)
    }
}

export const leaderboardController = new Controller();