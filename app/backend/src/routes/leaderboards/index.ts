import * as express from 'express';
import leaderboardsFactory from '../../factory/leaderboardsfactory';

const router = express.Router();

router.get('/home', (req, res, next) => {
  leaderboardsFactory().listHomeTeam(req, res, next);
});

router.get('/away', (req, res, next) => {
  leaderboardsFactory().listAwayTeam(req, res, next);
});

export default router;
