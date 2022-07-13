import { NextFunction, Request, Response } from 'express';
import { IMatchesService, IUsersService, Match, myDecoded } from '../protocols';
import jwtGenerate from '../helper/jwtGenerate';

export default class MatchesController {
  constructor(
    private service: IMatchesService,
    private userService: IUsersService,
  ) {
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
    try {
      const token = req.headers.authorization;
      const jwtDecode = jwtGenerate(token);
      const { email } = jwtDecode as myDecoded;
      const userExists = await this.userService.getByEmail(email);
      console.log(userExists);

      const result = await this.service.create(req.body);

      if (result.status === 200) return res.status(201).json(result.match);

      return res.status(result.status).json({ message: result.message });
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }

  async updateInProgress(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    await this.service.updateInProgress(Number(id));

    return res.status(200).json({ message: 'Finished' });
  }

  async updateGoals(req: Request, res: Response, _next: NextFunction) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body as Match;
    await this.service.updateGoals(
      Number(id),
      Number(homeTeamGoals),
      Number(awayTeamGoals),
    );

    return res.status(200).json({ message: 'Goals updated' });
  }
}
