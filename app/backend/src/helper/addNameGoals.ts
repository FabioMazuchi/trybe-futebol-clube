import { MatchOficial, NameGoals, TTeam } from '../protocols';

const addNameGoals = (repKeys: any, data: MatchOficial[], team: TTeam): NameGoals[] => {
  const result = repKeys.map((rep: any) => {
    const myArray = [];
    const obj = { name: '', totalGames: 0, goalsFavor: 0, goalsOwn: 0, goalsBalance: 0,
    };

    data.forEach((dat) => {
      if (rep[0] === `${dat[team].teamName}`) {
        obj.name = `${dat[team].teamName}`;
        obj.goalsFavor += team === 'teamAway' ? dat.awayTeamGoals : dat.homeTeamGoals;
        obj.goalsOwn += team === 'teamAway' ? dat.homeTeamGoals : dat.awayTeamGoals;
        obj.goalsBalance = obj.goalsFavor - obj.goalsOwn;
      }
    });
    myArray.push(obj);

    return myArray;
  });
  return result.map((res: NameGoals[]) => res[0]);
};

export default addNameGoals;
