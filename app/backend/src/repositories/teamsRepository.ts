import { ITeamsModel, Team } from '../protocols';
import teamsModel from '../database/models/teamsModel';

export default class TeamsRepository implements ITeamsModel {
  constructor(private model = teamsModel) {
    this.model = model;
  }

  async list(): Promise<Team[]> {
    const teams = await this.model.findAll({
      attributes: ['id', ['team_name', 'teamName']],
    });

    return teams as Team[];
  }
}
