import * as Jwt from 'jsonwebtoken';
import { ILoginValidateService, IUsersModel, myDecoded } from '../protocols/index';

export default class LoginValidateService implements ILoginValidateService {
  constructor(private model: IUsersModel) {
    this.model = model;
  }

  async login(token: string | undefined): Promise<string | undefined> {
    const myToken = token as string;
    const secret = process.env.JWT_SECRET as Jwt.Secret | Jwt.GetPublicKeyOrSecret;
    const decoded = Jwt.verify(myToken, secret) as unknown;
    const { email } = decoded as myDecoded;
    const user = await this.model.getByEmail(email);

    return user.role;
  }
}
