import * as jwt from 'jsonwebtoken';
import { User } from '../protocols';

const generateToken = (data: User): string => {
  const jwtSecret = process.env.JWT_SECRET as jwt.Secret;
  const token = jwt.sign(data, jwtSecret);

  return token;
};

export default generateToken;
