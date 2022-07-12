import {
  IMatchesModel,
  IMatchesService,
  Match,
  MyResult,
} from '../protocols/index';

export default class TeamsService implements IMatchesService {
  constructor(private model: IMatchesModel) {
    this.model = model;
  }

  async list(): Promise<Match[]> {
    const matches = await this.model.list();

    return matches;
  }

  async listInProgress(query: boolean | undefined): Promise<Match[]> {
    const matches = await this.model.listInProgress(query);

    return matches;
  }

  async create(data: Omit<Match, 'id' | 'inProgress'>): Promise<MyResult> {
    const { awayTeam, homeTeam } = data;
    const erro = {
      status: 401,
      message: 'It is not possible to create a match with two equal teams',
    };

    if (awayTeam === homeTeam) return erro;

    const match = await this.model.create(data);

    return { status: 200, match };
  }

  async updateInProgress(id: number): Promise<boolean> {
    const result = await this.model.updateInProgress(id);

    return result;
  }
}
