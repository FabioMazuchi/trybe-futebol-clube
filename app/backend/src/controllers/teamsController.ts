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

  async getById(req: Request, res: Response, _next: NextFunction) {
    const id = req.params.id as string;

    const result = await this.service.getById(Number(id));

    if (result === null) return res.status(400).json({ message: 'Team not found' });

    return res.status(200).json(result);
  }
}
