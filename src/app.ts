import bodyParser from "body-parser";
import express from "express";
import { leaderboardRouter } from "./components/leaderboard/route";
import { treasureRouter } from "./components/treasure/route";
import { userRouter } from "./components/user/route";
import { handleError } from "./middlewares/handleError";

export const app = express();
const baseUrl = "/api";

app.use(bodyParser.json())

app.use(baseUrl, userRouter)
app.use(baseUrl, treasureRouter)
app.use(baseUrl, leaderboardRouter)

app.use(handleError)