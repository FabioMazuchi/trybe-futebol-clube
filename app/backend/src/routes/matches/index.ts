import * as express from 'express';
import matchesFactory from '../../factory/matchesfactory';

const router = express.Router();

router.patch('/:id/finish', (req, res, next) => {
  matchesFactory().updateInProgress(req, res, next);
});

router.patch('/:id', (req, res, next) => {
  matchesFactory().updateGoals(req, res, next);
});

router.get('/', (req, res, next) => {
  matchesFactory().list(req, res, next);
});

router.post('/', (req, res, next) => {
  matchesFactory().create(req, res, next);
});

export default router;
