import { NextFunction, Request, Response } from 'express';
import { ILeaderboardsService } from '../protocols';

export default class LeaderboardsController {
  constructor(private service: ILeaderboardsService) {
    this.service = service;
  }

  async listFinished(req: Request, res: Response, _next: NextFunction) {
    const result = await this.service.getHomeTeams();

    return res.status(200).json(result);
  }
}
