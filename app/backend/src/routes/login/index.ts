import * as express from 'express';
import loginFactory from '../../factory/loginfactory';
import loginValidateFactory from '../../factory/loginValidateFactory';

const router = express.Router();

router.post('/', (req, res, next) => {
  loginFactory().login(req, res, next);
});

router.get('/validate', (req, res, next) => {
  loginValidateFactory().login(req, res, next);
});

export default router;
