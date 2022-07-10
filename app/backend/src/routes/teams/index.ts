import * as express from 'express';
import teamsFactory from '../../factory/teamsfactory';

const router = express.Router();

router.get('/', (req, res, next) => {
  teamsFactory().list(req, res, next);
});

export default router;
