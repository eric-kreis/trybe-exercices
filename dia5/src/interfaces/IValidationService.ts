import IUser from './IUser';

export default interface IValidationService {
  execute(request: IUser): boolean,
}
