import { ITeamsService, ITeamsModel, Team } from '../protocols/index';

export default class TeamsService implements ITeamsService {
  constructor(private model: ITeamsModel) {
    this.model = model;
  }

  async list(): Promise<Team[]> {
    const teams = await this.model.list();

    return teams;
  }

  async getById(id: number): Promise<Team | null> {
    const team = await this.model.getById(id);

    return team as Team || null;
  }
}
