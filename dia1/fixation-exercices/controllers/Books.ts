import { Request, Response } from 'express';
import Book from '../models/Book';
import BookService from '../services/BookService';

const all = async (_req: Request, res: Response) => {
  const books = await Book.getAll();

  res.status(200).json(books);
};

const byAuthorId = async (req: Request<{}, {}, {}, { author_id: string }>, res: Response) => {
  const { author_id } = req.query;

  const books = await Book.getByAuthorId(author_id);

  res.status(200).json(books);
};

const byBookId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const book = await Book.getByBookId(id);

  res.status(200).json(book);
};

const create = async (req: Request, res: Response) => {
  const { title, author_id: authorId } = req.body;

  const isValid = await BookService.isValid({ title, authorId });

  if (!isValid) return res.status(400).json({ message: 'Dados inválidos' });

  await Book.createBook({ title, authorId });

  res.status(200).json({ message: 'Livro criado com sucesso!' });
};

export default {
  all,
  byAuthorId,
  byBookId,
  create,
};