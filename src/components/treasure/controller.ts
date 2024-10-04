import { NextFunction, Request, Response } from "express";
import { moneyValueService } from "../moneyValue/serice";
import { treasureService } from "./service";
import { findSchema } from "./validator";

class Controller {
    find = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { latitude, longitude, distance } = findSchema.validateSync(req.query, { abortEarly: false });

            const treasures = await treasureService.find(latitude, longitude, distance)

            const rewards = []
            let prizeTotal = 0;
            for await (const treasure of treasures) {
                const moneyValues = await moneyValueService.list(treasure.id)

                const index = Math.floor(Math.random() * moneyValues.length);

                prizeTotal += moneyValues[index].amount
                rewards.push({
                    treasure: treasure.name,
                    prize: moneyValues[index].amount
                })
            }

            if (treasures.length > 0) {
                res.send({
                    message: `You found ${treasures.length} treasures and won ${prizeTotal}!`,
                    rewards
                })
            } else {
                res.send({
                    message: `No treasures within ${distance} KM. Try again.`,
                })
            }

        } catch (err) {
            next(err);
        }
    }
}

export const treasureController = new Controller();