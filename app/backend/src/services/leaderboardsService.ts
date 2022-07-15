import { ILeaderboardsService, IMatchesModel, MatchOficial, NameGoals } from '../protocols/index';
import arrayTotalGames from '../helper/arrayTotalGames';
import addNameGoals from '../helper/addNameGoals';
import addTotalGames from '../helper/addTotalGames';
import addKeys from '../helper/addKeys';
import addVDLTotalPoints from '../helper/addVDLTotalPoints';
import addEficiency from '../helper/addEficiency';
import compare from '../helper/compare';

export default class LeaderBboardsService implements ILeaderboardsService {
  constructor(private matchModel: IMatchesModel) {
    this.matchModel = matchModel;
  }

  async getHomeTeams(): Promise<NameGoals[]> {
    const resulModel = await this.matchModel.listFinished();
    const data = resulModel as MatchOficial[];
    const resultTotal = arrayTotalGames(data);
    const repeatKeysValues = Object.entries(resultTotal);
    const resultNameGoals = addNameGoals(repeatKeysValues, data);
    const resultsTotalGame = addTotalGames(resultNameGoals, repeatKeysValues);
    const resultAddKeys = addKeys(resultsTotalGame);
    const resultVDL = addVDLTotalPoints(resultAddKeys, data);
    const resultEfic = addEficiency(resultVDL);
    const resultFinal = compare(resultEfic);
    console.log(resultEfic);

    return resultFinal as NameGoals[];
  }
}
