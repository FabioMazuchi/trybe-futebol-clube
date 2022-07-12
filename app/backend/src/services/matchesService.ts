import { IMatchesModel, IMatchesService, Match } from '../protocols/index';

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

  async create(data: Omit<Match, 'id' | 'inProgress'>): Promise<Match> {
    const newMatch = await this.model.create(data);

    return newMatch;
  }

  async updateInProgress(id: number): Promise<boolean> {
    const result = await this.model.updateInProgress(id);

    return result;
  }
}
