import { MatchOficial, NameGoals } from '../protocols';

const addNameGoals = (repKeys: any, data: MatchOficial[]): NameGoals[] => {
  const result = repKeys.map((rep: any) => {
    const myArray = [];
    const obj = { name: '', totalGames: 0, goalsFavor: 0, goalsOwn: 0, goalsBalance: 0,
    };

    data.forEach((dat) => {
      if (rep[0] === dat.teamHome.teamName) {
        obj.name = dat.teamHome.teamName;
        obj.goalsFavor += dat.homeTeamGoals;
        obj.goalsOwn += dat.awayTeamGoals;
        obj.goalsBalance = obj.goalsFavor - obj.goalsOwn;
      }
    });
    myArray.push(obj);

    return myArray;
  });
  return result.map((res: NameGoals[]) => res[0]);
};

export default addNameGoals;
