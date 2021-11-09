import { ObjectId } from 'bson';
import { IUser } from './IUser';

interface IUserDB extends IUser {
  _id: ObjectId;
}

export { IUserDB }
