import * as express from 'express';
import loginRouter from './login';
import teamsRouter from './teams';
import matchesRouter from './matches';
import leaderboards from './leaderboards';

const router = express.Router();

router.use('/login', loginRouter);
router.use('/teams', teamsRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboards);

export default router;
