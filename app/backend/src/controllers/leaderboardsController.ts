import { NextFunction, Request, Response } from 'express';
import { ILeaderboardsService } from '../protocols';

export default class LeaderboardsController {
  constructor(private service: ILeaderboardsService) {
    this.service = service;
  }

  async listHomeTeam(req: Request, res: Response, _next: NextFunction) {
    const result = await this.service.listHomeTeams();

    return res.status(200).json(result);
  }

  async listAwayTeam(req: Request, res: Response, _next: NextFunction) {
    const result = await this.service.listAwayTeams();

    return res.status(200).json(result);
  }
}
