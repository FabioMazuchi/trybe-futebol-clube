import { IUsersModel, User } from '../protocols';
import userModel from '../database/models/usersModel';

export default class UserRepository implements IUsersModel {
  constructor(private model = userModel) {
    this.model = model;
  }

  async getById(id: number): Promise<Omit<User, 'id' | 'username' | 'role'>> {
    const user = await this.model.findByPk(id);

    return user as User;
  }

  async getByEmail(email: string): Promise<User> {
    const data = await this.model.findOne({ where: { email } });
    const user = {
      id: data?.id,
      username: data?.username,
      role: data?.role,
      email: data?.email,
      password: data?.password,
    };

    return user as User;
  }

  async getByPassword(password: string): Promise<User> {
    const data = await this.model.findOne({ where: { password } });
    const user = {
      id: data?.id,
      username: data?.username,
      role: data?.role,
      email: data?.email,
      password: data?.password,
    };

    return user as User;
  }
}
