import { ObjectId } from 'bson';

export default interface ISerializedAuthor {
  id?: ObjectId;
  firstName: string;
  middleName?: string;
  lastName: string;
}
