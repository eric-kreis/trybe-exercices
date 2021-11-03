import IUser from '../interfaces/IUser';
import IValidationService from '../interfaces/IValidationService';
import { usernameValidation, emailValidation, passwordValidation} from '../utils';

class RegisterValidation implements IValidationService {
  execute({ username, email, password }: IUser) {
    if (
      !username
      || !usernameValidation(username)
      || !emailValidation(email)
      || !passwordValidation(password)
    ) {
      return false;
    }

    return true;
  }
}

export default RegisterValidation;
