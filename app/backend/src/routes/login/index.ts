import * as express from 'express';
import loginFactory from '../../factory/loginfactory';

const router = express.Router();

router.post('', (req, res, next) => {
  loginFactory().login(req, res, next);
});

export default router;
