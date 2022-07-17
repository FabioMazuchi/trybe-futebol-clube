import { TTeam, MatchOficial } from '../protocols';
import addEficiency from './addEficiency';
import addKeys from './addKeys';
import addNameGoals from './addNameGoals';
import addTotalGames from './addTotalGames';
import addVDLTotalPointsAway from './addVDLTotalPointsAway';
import addVDLTotalPointsHome from './addVDLTotalPointsHome';
import arrayTotalGames from './arrayTotalGames';
import compare from './compare';

const main = (data: MatchOficial[], team: TTeam) => {
  const resultTotal = arrayTotalGames(data, team);
  const repeatKeysValues = Object.entries(resultTotal);
  const resultNameGoals = addNameGoals(repeatKeysValues, data, team);
  const resultsTotalGame = addTotalGames(resultNameGoals, repeatKeysValues);
  const resultAddKeys = addKeys(resultsTotalGame);
  let resultVDL;
  if (team === 'teamAway') {
    resultVDL = addVDLTotalPointsAway(resultAddKeys, data);
  } else {
    resultVDL = addVDLTotalPointsHome(resultAddKeys, data);
  }
  const resultEfic = addEficiency(resultVDL);
  const resultFinal = compare(resultEfic);

  return resultFinal;
};

export default main;
