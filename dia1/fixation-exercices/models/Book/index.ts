import connection from '../connection';
import IDefaultBook from './interfaces/IDefaultBook';
import ISerealizedBook from './interfaces/ISerealizedBook';

const serialize = (booksData: IDefaultBook): ISerealizedBook => ({
  id: booksData.id,
  title: booksData.title,
  authorId: booksData.author_id,
});

export default {
  async getAll(): Promise<ISerealizedBook[]> {
    const [books] = await connection.execute<IDefaultBook[]>(
      'SELECT id, title, author_id FROM books;'
    );

    return books.map(serialize);
  },

  async getByAuthorId(authorId: string): Promise<ISerealizedBook[]> {
    const query = 'SELECT id, title, author_id FROM books WHERE author_id=?;';

    const [books] = await connection.execute<IDefaultBook[]>(query, [authorId]);

    return books.map(serialize);
  },

  async getByBookId(bookId: string): Promise<ISerealizedBook> {
    const query = `SELECT id, title, author_id FROM books WHERE id=${bookId};`;

    const [books] = await connection.execute<IDefaultBook[]>(query);

    return books.map(serialize)[0];
  },

  async createBook({ title, authorId }: ISerealizedBook) {
    const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);';

    return connection.execute(query, [title, authorId]);
  },
};
