import { app } from "./src/app";

const port = 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});