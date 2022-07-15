import * as express from 'express';
import leaderboardsFactory from '../../factory/leaderboardsfactory';

const router = express.Router();

router.get('/home', (req, res, next) => {
  leaderboardsFactory().listFinished(req, res, next);
});

export default router;
