import { NextFunction, Request, Response } from 'express';
import { ILoginValidateService } from '../protocols';

export default class LoginValidateController {
  constructor(private service: ILoginValidateService) {
    this.service = service;
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      const role = await this.service.login(token);

      return res.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  }
}
