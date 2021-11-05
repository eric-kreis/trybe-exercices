import ISerealizedBook from '../models/Book/interfaces/ISerealizedBook';
import Author from '../models/Author';

const isValid = async ({ title, authorId }: ISerealizedBook) => {
  const author = await Author.getById(authorId);

  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !author) return false;

  return true;
};

export default {
  isValid,
};
