import { Schema, model, Document } from 'mongoose';

interface User extends Document {
  username: string;
  password: string;
  admin: boolean;
}

const UserSchema = new Schema({
  username: String,
  password: String,
  admin: Boolean,
});

export default model<User>('User', UserSchema);
