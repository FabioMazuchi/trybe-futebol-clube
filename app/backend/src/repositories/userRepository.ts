import { IUserModel, User } from '../protocols';
import userModel from '../database/models/usersModel';

export default class UserRepository implements IUserModel {
  constructor(private model = userModel) {
    this.model = model;
  }

  async getById(id: number): Promise<Omit<User, 'id' | 'username' | 'role'>> {
    const user = await this.model.findByPk(id);

    return user as User;
  }
}
