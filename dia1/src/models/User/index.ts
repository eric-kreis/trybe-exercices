import { Db } from 'mongodb';
import { connection } from '../connection';

import { IUser } from './interfaces/IUser';
import { IUserDB } from './interfaces/IUserDB';
import { ISerializedUser } from './interfaces/ISerealizedUser';
import { ObjectId } from 'bson';

class UserModel {
  private db: Promise<Db>;

  public constructor() {
    this.db = connection();
  }

  private async getCollection() {
    return (await this.db).collection<IUserDB>('users');
  }

  private serealize(user: IUserDB): ISerializedUser {
    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
  }

  public async findAll(): Promise<ISerializedUser[]> {
    const usersColl = await this.getCollection();
    const users = await usersColl.find().toArray();

    return users.map(this.serealize);
  }

  public async findById(id: string): Promise<ISerializedUser | null> {
    if (!ObjectId.isValid(id)) return null;
    
    const usersColl = await this.getCollection();

    const objId = new ObjectId(id);
    const user = await usersColl.findOne(objId);

    if (!user) return null;

    return this.serealize(user);
  }

  public async create(user: IUser): Promise<ISerializedUser | null> {
    const usersColl = await this.getCollection();
    const newUser = await usersColl.insertOne(user);

    return this.serealize({ _id: newUser.insertedId, ...user });
  }

  public async update(id: string, newUser: IUser): Promise<ISerializedUser | null> {
    if (!ObjectId.isValid(id)) return null;
    
    const usersColl = await this.getCollection();
    const objId = new ObjectId(id);
    const oldUser = await usersColl.findOne(objId);

    if (!oldUser) return null;

    await usersColl.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          password: newUser.password,
        },
      }
    );

    return this.serealize({ _id: objId, ...newUser });
  }

  public async delete(id: string): Promise<null | { message: string }> {
    if (!ObjectId.isValid(id)) return null;

    const usersColl = await this.getCollection();
    const objId = new ObjectId(id);
    const user = await usersColl.findOne(objId);

    if (!user) return null;

    await usersColl.deleteOne({ _id: objId });

    return { message: 'Usuário deletado com sucesso' };
  }
}

export { UserModel };
