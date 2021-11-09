import { ObjectId } from 'bson';
import connection from '../connection';
import IDefaultBook from './interfaces/IDefaultBook';

export default {
  async getAll(): Promise<IDefaultBook[]> {
    const db = await connection();
    const booksCollection = db.collection<IDefaultBook>('books');
    const books = await booksCollection.find().toArray();

    return books;
  },

  async getByAuthorId(authorId: string): Promise<IDefaultBook[] | null> {
    if (!ObjectId.isValid(authorId)) return null;

    const db = await connection();
    const booksCollection = db.collection<IDefaultBook>('books');
    const books = await booksCollection.find({ authorId: new ObjectId(authorId) }).toArray();

    if (!books) return null;

    return books;
  },

  async getByBookId(bookId: string): Promise<IDefaultBook | null> {
    if (!ObjectId.isValid(bookId)) return null;

    const db = await connection();
    const booksCollection = db.collection<IDefaultBook>('books');
    const book = await booksCollection.findOne({ _id: new ObjectId(bookId) });

    if (!book) return null;

    return book;
  },

  async createBook({ title, authorId }: { title: string, authorId: string }): Promise<IDefaultBook> {
    const db = await connection();
    const booksCollection = db.collection<IDefaultBook>('books');
    const book = await booksCollection.insertOne({ title, authorId: new ObjectId(authorId) });

    return { _id: book.insertedId, title, authorId: new ObjectId(authorId) };
  },
};
