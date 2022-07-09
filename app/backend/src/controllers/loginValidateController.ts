import { NextFunction, Request, Response } from 'express';
import { ILoginValidateService } from '../protocols';

export default class LoginValidateController {
  constructor(private service: ILoginValidateService) {
    this.service = service;
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      const result = await this.service.login(token);

      return res.status(200).json({ result });
    } catch (error) {
      next(error);
    }
  }
}
