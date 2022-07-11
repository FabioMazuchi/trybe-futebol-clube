import { IMatchesModel, IMatchesService, Match } from '../protocols/index';

export default class TeamsService implements IMatchesService {
  constructor(private model: IMatchesModel) {
    this.model = model;
  }

  async list(): Promise<Match[]> {
    const matches = await this.model.list();

    return matches;
  }
}
