export interface User {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface IUserModel {
  getById(id: number): Promise<Omit<User, 'id' | 'username' | 'role'>>;
}

export interface IUserService {
  getById(id: number): Promise<Omit<User, 'id' | 'username' | 'role'>>;
}

export interface ILoginModel {
  login(data: User): string;
}

export interface ILoginService {
  login(data: User): string;
}

export interface ITokenGenerator<T> {
  generate(data: T): string
}
