import { MoneyValue } from "./model";

class Service {
    async list(treasureId: number) {
        return await MoneyValue.findAll({
            where: {
                treasure_id: treasureId
            }
        })
    }
}

export const moneyValueService = new Service();