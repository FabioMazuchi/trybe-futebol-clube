import * as Jwt from 'jsonwebtoken';

const jwtGenerate = (token: string | undefined) => {
  const myToken = token as string;
  const secret = process.env.JWT_SECRET as
    | Jwt.Secret
    | Jwt.GetPublicKeyOrSecret;
  const decoded = Jwt.verify(myToken, secret) as unknown;

  return decoded;
};

export default jwtGenerate;
