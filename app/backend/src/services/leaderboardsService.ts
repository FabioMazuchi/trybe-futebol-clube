import { ILeaderboardsService, IMatchesModel, MatchOficial, NameGoals } from '../protocols/index';
import main from '../helper/main';

export default class LeaderBboardsService implements ILeaderboardsService {
  constructor(private matchModel: IMatchesModel) {
    this.matchModel = matchModel;
  }

  async listHomeTeams(): Promise<NameGoals[]> {
    const resulModel = await this.matchModel.listFinished();
    const data = resulModel as MatchOficial[];
    const results = main(data, 'teamHome');

    return results;
  }

  async listAwayTeams(): Promise<NameGoals[]> {
    const resulModel = await this.matchModel.listFinished();
    const data = resulModel as MatchOficial[];
    const results = main(data, 'teamAway');

    return results;
  }
}
