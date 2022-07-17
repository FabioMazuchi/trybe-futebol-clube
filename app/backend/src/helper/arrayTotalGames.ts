import { MatchOficial, TTeam } from '../protocols';

const arrayTotalGames = (data: MatchOficial[], team: TTeam) => {
  const array = data.map((d) => `${d[team].teamName}`);
  const obj: any = {};
  array.forEach((res: string) => {
    obj[res] = (obj[res] || 0) + 1;
  });

  return obj;
};

export default arrayTotalGames;
