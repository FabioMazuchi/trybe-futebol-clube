import { NextFunction, Request, Response } from 'express';
import { ILoginService } from '../protocols';

export default class LoginController {
  constructor(private service: ILoginService) {
    this.service = service;
  }

  async login(req: Request, res: Response, _next: NextFunction) {
    const result = await this.service.login(req.body);
    if (result.status === 200) return res.status(result.status).json({ token: result.token });

    return res.status(result.status).json({ message: result.message });
  }
}
