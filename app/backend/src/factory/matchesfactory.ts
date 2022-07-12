import MatchesRepository from '../repositories/matchesRepository';
import MatchesService from '../services/matchesService';
import MatchesController from '../controllers/matchesController';
import TeamsModel from '../repositories/teamsRepository';

const matchesFactory = () => {
  const teamsModel = new TeamsModel();
  const repository = new MatchesRepository();
  const service = new MatchesService(repository, teamsModel);
  const controller = new MatchesController(service);

  return controller;
};

export default matchesFactory;
