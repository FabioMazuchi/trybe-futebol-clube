import { IUsersService, IUsersModel, User } from '../protocols/index';

export default class UsersService implements IUsersService {
  constructor(private model: IUsersModel) {
    this.model = model;
  }

  async getById(id: number): Promise<Omit<User, 'id' | 'username' | 'role'>> {
    const user = await this.model.getById(id);

    return user;
  }

  async getByEmail(email: string): Promise<User> {
    const user = await this.model.getByEmail(email);

    return user;
  }
}
