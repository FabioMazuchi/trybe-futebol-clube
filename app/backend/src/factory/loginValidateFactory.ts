import UserRepository from '../repositories/userRepository';
import LoginValidateController from '../controllers/loginValidateController';
import LoginValidateService from '../services/loginValidateService';

const loginValidateFactory = () => {
  const repository = new UserRepository();
  const service = new LoginValidateService(repository);
  const controller = new LoginValidateController(service);

  return controller;
};

export default loginValidateFactory;
