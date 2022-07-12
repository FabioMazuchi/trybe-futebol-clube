import { NextFunction, Request, Response } from 'express';
import { IMatchesService, Match } from '../protocols';

export default class MatchesController {
  constructor(private service: IMatchesService) {
    this.service = service;
  }

  async list(req: Request, res: Response, _next: NextFunction) {
    const matches = await this.service.list();

    return res.status(200).json(matches);
  }

  async listInProgress(req: Request, res: Response, _next: NextFunction) {
    const query = req.query.inProgress as undefined | string;
    const convertStringBool = (value: string | undefined) => {
      if (value === 'true') return true;
      return false;
    };
    const result = convertStringBool(query);
    const matches = await this.service.listInProgress(result);

    return res.status(200).json(matches);
  }

  async create(req: Request, res: Response, _next: NextFunction) {
    const result = await this.service.create(req.body);

    if (result.status === 200) return res.status(201).json(result.match);

    return res.status(result.status).json({ message: result.message });
  }

  async updateInProgress(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    await this.service.updateInProgress(Number(id));

    return res.status(200).json({ message: 'Finished' });
  }

  async updateGoals(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body as Match;
    await this.service.updateGoals(Number(id), Number(homeTeamGoals), Number(awayTeamGoals));

    return res.status(200).json({ message: 'Goals updated' });
  }
}
