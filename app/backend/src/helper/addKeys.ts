import { NameGoals } from '../protocols';

const addKeys = (array: NameGoals[]) => {
  const myArray = array;
  for (let i = 0; i < array.length; i += 1) {
    myArray[i].totalPoints = 0;
    myArray[i].totalVictories = 0;
    myArray[i].totalDraws = 0;
    myArray[i].totalLosses = 0;
    myArray[i].efficiency = 0;
  }
  return myArray;
};

export default addKeys;
