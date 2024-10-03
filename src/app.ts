import bodyParser from "body-parser";
import express from "express";
import { userRouter } from "./components/user/route";

export const app = express();
const baseUrl = "/api";

app.use(bodyParser.json())

app.use(baseUrl, userRouter)