import { NameGoals } from '../protocols';

const addEficiency = (array: NameGoals[]) => {
  const result = array;
  array.forEach((arr, i) => {
    const total = (arr.totalPoints / (arr.totalGames * 3)) * 100;
    result[i].efficiency = Number(total.toFixed(2));
  });
  return result;
};

export default addEficiency;
