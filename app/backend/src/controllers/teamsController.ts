import { NextFunction, Request, Response } from 'express';
import { ITeamsService } from '../protocols';

export default class TeamsController {
  constructor(private service: ITeamsService) {
    this.service = service;
  }

  async list(req: Request, res: Response, _next: NextFunction) {
    const teams = await this.service.list();

    return res.status(200).json(teams);
  }
}
