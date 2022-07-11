import { NextFunction, Request, Response } from 'express';
import { IMatchesService } from '../protocols';

export default class MatchesController {
  constructor(private service: IMatchesService) {
    this.service = service;
  }

  async list(req: Request, res: Response, _next: NextFunction) {
    const matches = await this.service.list();

    return res.status(200).json(matches);
  }
}
