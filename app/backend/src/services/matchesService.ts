import {
  IMatchesModel,
  IMatchesService,
  ITeamsModel,
  Match,
  MyResult,
} from '../protocols/index';

export default class TeamsService implements IMatchesService {
  constructor(private model: IMatchesModel, private teamModel: ITeamsModel) {
    this.model = model;
    this.teamModel = teamModel;
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
    const erro1 = { status: 404, message: 'There is no team with such id!' };

    if (awayTeam === homeTeam) return erro;
    const teams = await this.teamModel.getByIds(awayTeam, homeTeam);
    console.log(teams.length);
    if (teams.length !== 2) return erro1;
    const match = await this.model.create(data);

    return { status: 200, match };
  }

  async updateInProgress(id: number): Promise<boolean> {
    const result = await this.model.updateInProgress(id);

    return result;
  }

  async updateGoals(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<boolean> {
    const result = await this.model.updateGoals(id, homeTeamGoals, awayTeamGoals);

    return result;
  }
}
