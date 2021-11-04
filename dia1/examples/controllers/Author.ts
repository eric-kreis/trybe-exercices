import { Request, Response } from 'express';
import Author from '../models/Author';

export default {
  async all(_req: Request, res: Response) {
    const authors = await Author.getAll();

    return res.status(200).json(authors);
  },
};
