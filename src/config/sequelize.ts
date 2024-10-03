import { Dialect, Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USERNAME!,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_ENGINE! as Dialect,
        host: process.env.DB_HOST!,
        port: process.env.DB_PORT! as unknown as number,
        logging: false,
    }
);