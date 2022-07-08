import { NextFunction, Request, Response } from 'express';
import { ILoginService } from '../protocols';

export default class LoginController {
  constructor(private service: ILoginService) {
    this.service = service;
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = this.service.login(req.body);

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
