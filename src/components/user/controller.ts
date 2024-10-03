import { NextFunction, Request, Response } from "express";
import { userService } from "./service";

class Controller {
    login = async (req: Request, res: Response, next: NextFunction) => {
        const email = req.body.email as string
        const password = req.body.password as string

        if (!email || !password) {
            res.status(400).json({
                message: "Email and password is required."
            })
            return
        }

        const token = await userService.login(email, password)

        if (token) {
            res.status(200).json({
                message: "Login successful.",
                token
            })
        } else {
            res.status(401).json({
                message: "Invalid email or password."
            })
        }
    }
}

export const userController = new Controller();