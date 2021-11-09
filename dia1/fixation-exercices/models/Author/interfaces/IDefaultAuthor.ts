import { ObjectId } from 'bson';

export default interface IDefaultAuthor {
  _id?: ObjectId;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthday ?: string;
  nationality?: string;
}
