import { Op } from 'sequelize';
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

  async getById(id: number): Promise<Team> {
    const team = await this.model.findByPk(id, {
      attributes: ['id', ['team_name', 'teamName']],
    });

    return team as Team || null;
  }

  async getByIds(idHome: number, idAway: number): Promise<Team[]> {
    const teams = await this.model.findAll({
      where: {
        [Op.or]: [
          { id: idHome },
          { id: idAway },
        ],
      },
    });

    return teams;
  }
}
