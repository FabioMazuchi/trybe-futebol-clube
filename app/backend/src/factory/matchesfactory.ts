import MatchesRepository from '../repositories/matchesRepository';
import MatchesService from '../services/matchesService';
import MatchesController from '../controllers/matchesController';

const matchesFactory = () => {
  const repository = new MatchesRepository();
  const service = new MatchesService(repository);
  const controller = new MatchesController(service);

  return controller;
};

export default matchesFactory;
