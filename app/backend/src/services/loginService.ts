import { ILoginService, IUserModel, MyResult, User } from '../protocols/index';
import generateToken from '../helper/TokenGenerator';
import ValidLoginBody from '../helper/validLoginBody';

export default class LoginService implements ILoginService {
  constructor(private model: IUserModel) {
    this.model = model;
  }

  async login(data: User): Promise<MyResult> {
    const erro = { status: 400, message: 'All fields must be filled' };
    const erro1 = { status: 401, message: 'Incorrect email or password' };

    const { email, password } = data;
    if (!email || !password) return erro;

    const result = new ValidLoginBody(email, password).valid();
    if (!result) return erro1;

    const userEmail = await this.model.getByEmail(email);

    if (userEmail.email === undefined) return erro1;

    const token = generateToken(data);

    return { status: 200, token };
  }
}
