import { ObjectId } from 'bson';

export default interface IDefaultBook {
  _id?: ObjectId,
  title: string,
  authorId: ObjectId
}
