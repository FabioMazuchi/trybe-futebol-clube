import { ILoginValidateService, IUserModel } from '../protocols/index';

export default class LoginValidateService implements ILoginValidateService {
  constructor(private model: IUserModel) {
    this.model = model;
  }

  async login(authorization: string | undefined): Promise<string | undefined> {
    console.log(this.model);
    console.log(authorization);
    return authorization;
  }
}
