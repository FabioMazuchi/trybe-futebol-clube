import LeaderboardsController from '../controllers/leaderboardsController';
import LeaderBboardsService from '../services/leaderboardsService';
import MatchesRepository from '../repositories/matchesRepository';

const matchesFactory = () => {
  const model = new MatchesRepository();
  const service = new LeaderBboardsService(model);
  const controller = new LeaderboardsController(service);

  return controller;
};

export default matchesFactory;
