import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import knex from '../database/connection';

export const insert = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    console.log(name, email, password)

    const user = await knex('Users').where('email', '=', email).select('email');

    if (user.length > 0) {
        return res.status(400).send({ error: 'User exists' });
    }

    const hash = await bcrypt.hash(password, 10);

    const login = await knex('Users').insert({
        name,
        email,
        password: hash
    });

    return res.json(login)
}

export default { insert }