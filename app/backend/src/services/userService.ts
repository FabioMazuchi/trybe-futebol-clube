import { IUserModel, IUserService, User } from '../protocols';

export default class UserService implements IUserService {
  constructor(private model: IUserModel) {
    this.model = model;
  }

  getById(id: number): Promise<Omit<User, 'id' | 'username' | 'role'>> {
    const user = this.model.getById(id);

    return user;
  }
}
