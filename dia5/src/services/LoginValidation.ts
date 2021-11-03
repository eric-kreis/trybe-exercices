import IUser from '../interfaces/IUser';
import IValidationService from '../interfaces/IValidationService';
import { emailValidation, passwordValidation} from '../utils';

class LoginValidation implements IValidationService {
  execute({ email, password }: IUser) {
    if (!emailValidation(email) || !passwordValidation(password)) {
      return false;
    }

    return true;
  }
}

export default LoginValidation;