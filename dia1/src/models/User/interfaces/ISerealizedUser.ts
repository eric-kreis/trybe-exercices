import { ObjectId } from 'bson';
import { IUser } from './IUser';

interface ISerializedUser extends IUser {
  id: ObjectId;
}

export { ISerializedUser };
