import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export class AuthController {
    public authenticate(req: Request, res: Response) {
        const { user, password } = req.body

        if(user != process.env.USER || password != process.env.PASSWORD)
            return res.status(400).send({ error: 'Invalid Credentials' })
        res.send({
            token: jwt.sign({user:user,password:password}, process.env.SECRET, {
                expiresIn: 86400
            })
        })
    }
}