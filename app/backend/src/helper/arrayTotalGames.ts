import { MatchOficial } from '../protocols';

const arrayTotalGames = (data: MatchOficial[]) => {
  const array = data.map((d) => d.teamHome.teamName);
  const obj: any = {};
  array.forEach((res: string) => {
    obj[res] = (obj[res] || 0) + 1;
  });

  return obj;
};

export default arrayTotalGames;
