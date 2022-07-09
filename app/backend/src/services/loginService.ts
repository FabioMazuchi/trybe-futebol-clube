import ValidLoginBody from '../middlewares/validLoginBody';
import { ILoginService, IUserModel, MyResult, User } from '../protocols/index';
import generateToken from '../helper/TokenGenerator';

export default class LoginService implements ILoginService {
  constructor(private model: IUserModel) {
    this.model = model;
  }

  async login(data: User): Promise<MyResult> {
    const erro = { status: 400, message: 'All fields must be filled' };
    const erro1 = { status: 401, message: 'Incorrect email or password' };

    const { email, password } = data;
    if (!email || !password) return erro;
    console.log(this.model);

    const result = new ValidLoginBody(email, password).valid();

    if (!result) return erro1;

    const userEmail = await this.model.getByEmail(email);
    const userPass = await this.model.getByPassword(password);

    if (userEmail.email === undefined || userPass.password === undefined) return erro1;

    const token = generateToken(data);

    return { status: 200, token };
  }
}
