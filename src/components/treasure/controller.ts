import { NextFunction, Request, Response } from "express";
import { historyService } from "../history/service";
import { moneyValueService } from "../moneyValue/serice";
import { treasureService } from "./service";
import { findSchema } from "./validator";

class Controller {
    find = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { latitude, longitude, distance, prizeValue } = findSchema.validateSync(req.query, { abortEarly: false });
            const userKey = "user" as keyof typeof req
            const userId = Number(req[userKey].id)

            const treasures = await treasureService.find(latitude, longitude, distance)

            const rewards = []
            let prizeTotal = 0;
            for await (const treasure of treasures) {
                let amount;
                const moneyValues = await moneyValueService.list(treasure.id, prizeValue)

                if (moneyValues.length === 0) {
                    rewards.push({
                        treasure: treasure.name,
                        message: "Sadly, this treasure does not meet the prizeValue criteria"
                    })
                    amount = 0;
                } else {
                    // Get minimum if prizeValue is truthy
                    const index = prizeValue
                        ? 0
                        : Math.floor(Math.random() * moneyValues.length);

                    prizeTotal += moneyValues[index].amount
                    amount = moneyValues[index].amount
                    rewards.push({
                        treasure: treasure.name,
                        prize: moneyValues[index].amount
                    })
                }

                historyService.log(userId, treasure.id, amount)
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