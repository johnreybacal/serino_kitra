import { History } from "./model";

class Service {
    log(userId: number, treasureId: number, amount: number) {
        const history = History.build()

        history.user_id = userId;
        history.treasure_id = treasureId;
        history.amount = amount;

        history.save();
    }
}

export const historyService = new Service();