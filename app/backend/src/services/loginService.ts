import { ILoginService, IUserModel, User } from '../protocols/index';
import generateToken from '../helper/TokenGenerator';

export default class LoginService implements ILoginService {
  constructor(private model: IUserModel) {
    this.model = model;
  }

  login(data: User): string {
    const user = this.model.getById(data.id);
    if (!user) throw new Error('user not found');
    const token = generateToken(data);

    return token;
  }
}
