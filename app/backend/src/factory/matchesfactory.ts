import MatchesRepository from '../repositories/matchesRepository';
import MatchesService from '../services/matchesService';
import MatchesController from '../controllers/matchesController';
import TeamsModel from '../repositories/teamsRepository';
import UsersService from '../services/usersService';
import UsersModel from '../repositories/userRepository';

const matchesFactory = () => {
  const usersModel = new UsersModel();
  const usersService = new UsersService(usersModel);
  const teamsModel = new TeamsModel();
  const repository = new MatchesRepository();
  const service = new MatchesService(repository, teamsModel);
  const controller = new MatchesController(service, usersService);

  return controller;
};

export default matchesFactory;
