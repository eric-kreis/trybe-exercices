import { ObjectId } from 'bson';
import connection from '../connection';
import ICustomAuthor from './interfaces/ICustomAuthor';
import IDefaultAuthor from './interfaces/IDefaultAuthor';
import ISerializedAuthor from './interfaces/ISerializedAuthor';

const serialize = (authorData: IDefaultAuthor): ISerializedAuthor => ({
  id: authorData._id,
  firstName: authorData.firstName,
  middleName: authorData.middleName,
  lastName: authorData.lastName,
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
  const db = await connection();
  const authors = await db.collection<IDefaultAuthor>('authors').find().toArray();

  return authors.map(serialize).map(newAuthor);
};

const getById = async (authorId: string): Promise<ICustomAuthor | null> => {
  if (!ObjectId.isValid(authorId)) return null;

  const db = await connection();
  const author = await db.collection<IDefaultAuthor>('authors')
    .findOne(new ObjectId(authorId));

  if (!author) return null;

  return newAuthor(serialize(author));
};

const create = async ({ firstName, middleName, lastName }: IDefaultAuthor): Promise<ICustomAuthor> => {
  const db = await connection();
  const add = await db.collection<IDefaultAuthor>('authors')
    .insertOne({
      _id: new ObjectId(),
      firstName,
      middleName,
      lastName,
    });

  return newAuthor({ id: add.insertedId, firstName, middleName, lastName });
};

export default {
  getAll,
  getById,
  isValidAuthor,
  create,
};
