import IUserInfo from '@interfaces/IUserInfo';

declare global {
  namespace Express {
    interface Request {
      user: IUserInfo
    }
  }
}