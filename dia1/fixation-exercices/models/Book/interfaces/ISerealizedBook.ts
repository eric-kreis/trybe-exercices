import { ObjectId } from 'bson';

export default interface ISerealizedBook {
  _id?: ObjectId,
  title: string,
  authorId: ObjectId
}
