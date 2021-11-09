import { Request, Response } from 'express';
import Author from '../models/Author';

export default {
  async all(_req: Request, res: Response) {
    const authors = await Author.getAll();

    res.status(200).json(authors);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const author = await Author.getById(id);

    if (!author) return res.status(404).json({ message: 'Autor não encontrado' });

    res.status(200).json(author);
  },

  async createAuthor(req: Request, res: Response) {
    const {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
    } = req.body;

    if (!Author.isValidAuthor({ firstName, middleName, lastName })) {
      return res.status(400).json({ message: 'Dados inválidos' });
    }

    const created = await Author.create({ firstName, middleName, lastName });

    res.status(200).json(created);
  },
};
