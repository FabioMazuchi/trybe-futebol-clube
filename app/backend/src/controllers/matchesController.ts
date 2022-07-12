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
}
