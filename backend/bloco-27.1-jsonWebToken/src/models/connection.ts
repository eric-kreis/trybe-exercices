import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_HOST } = process.env;
const DB_NAME = 'jwt_example';

export default () => {
  mongoose.connect(DATABASE_HOST.concat(DB_NAME));
};
