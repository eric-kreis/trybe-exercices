import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';

dotenv.config();

const { SECRET } = process.env;

export default ({ username, admin }: { username: string; admin: boolean; }) => {
  const payload = {
    username,
    admin,
  };

  const jwtConfig: SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  return jwt.sign({ data: payload }, SECRET, jwtConfig);
};
