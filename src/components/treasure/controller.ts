import { NextFunction, Request, Response } from "express";
import { treasureService } from "./service";
import { findSchema } from "./validator";

class Controller {
    find = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { latitude, longitude, distance } = findSchema.validateSync(req.query, { abortEarly: false });

            const treasures = await treasureService.find(latitude, longitude, distance)

            res.send(treasures)
        } catch (err) {
            next(err);
        }
    }
}

export const treasureController = new Controller();