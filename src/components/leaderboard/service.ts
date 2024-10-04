import { QueryTypes } from "sequelize";
import { sequelize } from "../../config/sequelize";

class Service {
    async list() {
        return await sequelize.query(`
            SELECT
                u.name,
                COUNT(*) AS treasures_found,
                SUM(h.amount) AS prize_won
            FROM histories AS h
            LEFT JOIN users AS u
            ON h.user_id = u.id
            GROUP BY u.id
            ORDER BY
                treasures_found DESC,
                prize_won DESC
            `,
            {
                type: QueryTypes.SELECT,
            });
    }
}

export const leaderboardService = new Service();