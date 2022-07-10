import TeamsRepository from '../repositories/teamsRepository';
import TeamsService from '../services/teamsService';
import TeamsController from '../controllers/teamsController';

const teamsFactory = () => {
  const repository = new TeamsRepository();
  const service = new TeamsService(repository);
  const controller = new TeamsController(service);

  return controller;
};

export default teamsFactory;
