import { app } from "./src/app";
import { PORT } from "./src/config/meta";
import { sequelize } from "./src/config/sequelize";

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.error("Connected to database.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
    }
    console.log(`Listening on port ${PORT}.`);
});