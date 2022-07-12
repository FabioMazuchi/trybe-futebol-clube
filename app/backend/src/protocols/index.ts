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

export interface Team {
  id: number;
  teamName: string;
}

export interface ITeamsModel {
  list(): Promise<Team[]>;
  getById(id: number): Promise<Team>;
}

export interface ITeamsService {
  list(): Promise<Team[] | null>;
  getById(id: number): Promise<Team | null>;
}

export interface Match {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IMatchesModel {
  list(): Promise<Match[]>;
  listInProgress(query: boolean | undefined): Promise<Match[]>;
  create(data: Omit<Match, 'id' | 'inProgress'>): Promise<Match>;
  updateInProgress(id: number): Promise<boolean>;
}

export interface IMatchesService {
  list(): Promise<Match[]>;
  listInProgress(query: boolean | undefined): Promise<Match[]>;
  create(data: Omit<Match, 'id' | 'inProgress'>): Promise<Match>;
  updateInProgress(id: number): Promise<boolean>;
}
