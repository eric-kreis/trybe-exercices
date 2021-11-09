import Author from '../models/Author';

const isValid = async ({ title, authorId }: { title: string, authorId: string }) => {
  const author = await Author.getById(authorId);

  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'string' || !author) return false;

  return true;
};

export default {
  isValid,
};
