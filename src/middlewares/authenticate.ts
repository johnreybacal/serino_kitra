import {
    NextFunction,
    Request,
    Response
} from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/meta";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    jwt.verify(token.split(' ')[1], JWT_SECRET, (err, payload) => {
        if (err) {
            res.status(403).json({ error: 'Forbidden' });
            return;
        }

        Object.assign(req, {
            user: (payload as JwtPayload).user
        })
        next();
    });

}