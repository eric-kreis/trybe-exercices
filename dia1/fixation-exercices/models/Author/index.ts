import connection from '../connection';
import ICustomAuthor from './interfaces/ICustomAuthor';
import IDefaultAuthor from './interfaces/IDefaultAuthor';
import ISerializedAuthor from './interfaces/ISerializedAuthor';

const serialize = (authorData: IDefaultAuthor): ISerializedAuthor => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const newAuthor = (authorData: ISerializedAuthor): ICustomAuthor => ({
  ...authorData,
  fullName: [
    authorData.firstName,
    authorData.middleName,
    authorData.lastName,
  ].filter((name) => name).join(' '),
});

const isValidAuthor = ({ firstName, middleName, lastName }: ISerializedAuthor) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async (): Promise<ICustomAuthor[]> => {
  const [authors] = await connection.execute<IDefaultAuthor[]>(
    'SELECT id, first_name, middle_name, last_name FROM authors;'
  );

  return authors.map(serialize).map(newAuthor);
};

const getById = async (authorId: number): Promise<ISerializedAuthor> => {
  const [authors] = await connection.execute<IDefaultAuthor[]>(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?;',
    [authorId],
  );

  return authors.map(serialize)[0];
};

const create = async ({ firstName, middleName, lastName }: ISerializedAuthor) => (
  connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?);',
    [firstName, middleName, lastName],
  )
);

export default {
  getAll,
  getById,
  isValidAuthor,
  create,
};
