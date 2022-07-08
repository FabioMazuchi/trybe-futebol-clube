import UserRepository from '../repositories/userRepository';
import LoginService from '../services/loginService';
import LoginController from '../controllers/loginController';

const loginFactory = () => {
  const repository = new UserRepository();
  const service = new LoginService(repository);
  const controller = new LoginController(service);

  return controller;
};

export default loginFactory;
