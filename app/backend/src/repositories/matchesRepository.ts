import { IMatchesModel, Match } from '../protocols';
import matchesModel from '../database/models/matchesModel';
import Teams from '../database/models/teamsModel';

export default class MatchesRepository implements IMatchesModel {
  constructor(private model = matchesModel) {
    this.model = model;
  }

  async list(): Promise<Match[]> {
    const matches = await this.model.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return matches as Match[];
  }

  async listInProgress(query: boolean | undefined): Promise<Match[]> {
    const matches = await this.model.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
      where: {
        inProgress: query,
      },
    });

    return matches as Match[];
  }
}
