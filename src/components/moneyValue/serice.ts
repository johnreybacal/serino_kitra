import { Op } from "sequelize";
import { MoneyValue } from "./model";

class Service {
    async list(treasureId: number, prizeValue?: number) {
        const where = {
            treasure_id: treasureId
        }
        if (prizeValue) {
            Object.assign(where, {
                amount: {
                    [Op.gte]: prizeValue
                }
            })
        }
        return await MoneyValue.findAll({ where, order: [['amount', 'ASC']] })
    }
}

export const moneyValueService = new Service();