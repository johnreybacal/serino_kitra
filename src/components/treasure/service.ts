import { QueryTypes } from "sequelize";
import { sequelize } from "../../config/sequelize";
import { Treasure } from "./model";

class Service {
    async find(latitude: number, longitude: number, distance: number) {
        // kilometer to meter
        distance *= 1000;

        // https://stackoverflow.com/a/60882828
        const query = `
            SELECT *
            FROM treasures
            WHERE ST_Distance_Sphere(
                point(longitude, latitude),
                point(:longitude, :latitude)) <= :distance
        `
        const treasures = await sequelize.query(query, {
            replacements: {
                latitude, longitude, distance
            },
            type: QueryTypes.SELECT,
            model: Treasure,
            mapToModel: true,
        });

        return treasures;
    }
}

export const treasureService = new Service();