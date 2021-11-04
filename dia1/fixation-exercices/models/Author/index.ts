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

const getAll = async (): Promise<ICustomAuthor[]> => {
  const [authors] = await connection.execute<IDefaultAuthor[]>(
    'SELECT id, first_name, middle_name, last_name FROM authors;'
  );

  return authors.map(serialize).map(newAuthor);
};

export default {
  getAll
};
