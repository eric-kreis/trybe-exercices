import { Request, Response } from 'express';
import Book from '../models/Book';

export default {
  async all(_req: Request, res: Response) {
    const books = await Book.getAll();

    return res.status(200).json(books);
  },

  async byAuthorId(req: Request<{}, {}, {}, { author_id: string }>, res: Response) {
    const { author_id } = req.query;

    const books = await Book.getByAuthorId(author_id);

    return res.status(200).json(books);
  },

  async byBookId(req: Request, res: Response) {
    const { id } = req.params;

    const book = await Book.getByBookId(id);

    return res.status(200).json(book);
  }
};