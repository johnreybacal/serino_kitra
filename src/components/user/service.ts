import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_EXPIRATION, JWT_SECRET } from "../../config/meta";
import { User } from "./model";

class Service {
    async login(email: string, password: string) {
        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) {
            return null;
        }

        const isValid = compareSync(password, user.password)

        if (!isValid) {
            return null;
        }

        const payload = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                age: user.age,
            }
        }
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION })
        return token;
    }
}

export const userService = new Service();