export interface User {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface IUserModel {
  getById(id: number): Promise<Omit<User, 'id' | 'username' | 'role'>>;
  getByEmail(email: string): Promise<User>
  getByPassword(password: string): Promise<User>;
}

export interface IUserService {
  getById(id: number): Omit<User, 'id' | 'username' | 'role'>;
}

export interface ILoginModel {
  login(data: User): string;
}

export interface ILoginService {
  login(data: User): Promise<MyResult>;
}

export interface ILoginValidateService {
  login(token: string | undefined): Promise<string | undefined>;
}

export interface ITokenGenerator<T> {
  generate(data: T): string
}

export interface IValidatorLogin {
  validEmail(): boolean
  validPassword(): boolean
  valid(): boolean
}

export type MyResult = {
  status: number,
  message?: string,
  token?: string,
};

export type myDecoded = {
  email: string,
  password: string,
  iat: number,
};
