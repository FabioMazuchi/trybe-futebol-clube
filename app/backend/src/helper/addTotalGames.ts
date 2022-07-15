import { NameGoals } from '../protocols';

const addTotalGames = (arrayData: NameGoals[], repeat: any) => {
  const array = arrayData;
  for (let i = 0; i < arrayData.length; i += 1) {
    if (arrayData[i].name === repeat[i][0]) {
      const value = repeat[i][1];
      array[i].totalGames = value;
    }
  }
  return array;
};

export default addTotalGames;
