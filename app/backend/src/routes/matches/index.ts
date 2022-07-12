import * as express from 'express';
import matchesFactory from '../../factory/matchesfactory';

const router = express.Router();

router.get('/', (req, res, next) => {
  matchesFactory().list(req, res, next);
});

// router.get('/', (req, res, next) => {
//   matchesFactory().listInProgress(req, res, next);
// });

export default router;
