import { MatchOficial, NameGoals } from '../protocols';

const addVDLTotalPointsAway = (array: NameGoals[], data: MatchOficial[]) => {
  const result = array;
  data.forEach((dat) => {
    array.map((arr, i) => {
      if (arr.name === dat.teamAway.teamName && dat.awayTeamGoals > dat.homeTeamGoals) {
        result[i].totalVictories = (arr.totalVictories || 0) + 1;
        result[i].totalPoints += 3;
      }
      if (arr.name === dat.teamAway.teamName && dat.awayTeamGoals < dat.homeTeamGoals) {
        result[i].totalLosses = (arr.totalLosses || 0) + 1;
      }
      if (arr.name === dat.teamAway.teamName && dat.homeTeamGoals === dat.awayTeamGoals) {
        result[i].totalDraws = (arr.totalDraws || 0) + 1;
        result[i].totalPoints += 1;
      }
      return arr;
    });
  });
  return result;
};

export default addVDLTotalPointsAway;
