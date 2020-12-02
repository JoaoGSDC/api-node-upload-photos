import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import knex from '../database/connection';
import { secret } from '../config/auth.json';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const results = await knex('Users').where('email', email).select('*');
    const user = results[0];

    if (!user.email) {
        return res.status(400).send({ error: 'User not found' });
    }

    const pw = await bcrypt.compare(password, user.password);

    if (!pw) {
        return res.status(400).send({ error: 'Password not found' });
    }

    const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400
    });

    return res.send({ user, token });
}

export default { login }