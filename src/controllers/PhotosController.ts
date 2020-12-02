import { Request, Response } from 'express';
import knex from '../database/connection';

export const index = async (req: Request, res: Response) => {
    const photos = await knex('Photos').select('*');

    return res.json(photos);
}

export const insert = async (req: Request, res: Response) => {
    const { photo, name, date } = req.body;

    await knex('Photos').insert({ photo, name, date });

    const photos = await knex('Photos').select('*');

    return res.json(photos);
}

export const delet = async (req: Request, res: Response) => {
    const { id } = req.headers;

    await knex('Photos').where('id', id).delete();

    const photos = await knex('Photos').select('*');

    return res.json(photos);
}

export default { index, insert, delet }