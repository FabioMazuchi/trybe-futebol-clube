import { NameGoals } from '../protocols';

function compareA(a: NameGoals, b: NameGoals) {
  if (a.totalPoints < b.totalPoints) return 1;
  if (a.totalPoints > b.totalPoints) return -1;
  return 0;
}

function compareB(a: NameGoals, b: NameGoals) {
  if (a.totalVictories < b.totalVictories) return 1;
  if (a.totalVictories > b.totalVictories) return -1;
  return 0;
}

function compareC(a: NameGoals, b: NameGoals) {
  if (a.goalsBalance < b.goalsBalance) return 1;
  if (a.goalsBalance > b.goalsBalance) return -1;
  return 0;
}

function compareD(a: NameGoals, b: NameGoals) {
  if (a.goalsFavor < b.goalsFavor) return 1;
  if (a.goalsFavor > b.goalsFavor) return -1;
  return 0;
}

function compareE(a: NameGoals, b: NameGoals) {
  if (a.goalsOwn < b.goalsOwn) return 1;
  if (a.goalsOwn > b.goalsOwn) return -1;
  return 0;
}

const compare = (array: NameGoals[]) => {
  array.sort(compareE);
  array.sort(compareD);
  array.sort(compareC);
  array.sort(compareB);
  array.sort(compareA);
  return array;
};

export default compare;
