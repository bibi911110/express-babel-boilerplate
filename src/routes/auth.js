import { Router } from 'express';
import authController from '../controllers/auth';
import validate from '../middlewares/validate';
import requireAuth from '../middlewares/auth';
import authSchemas from '../validations/auth';

const router = Router();

router.post('/login', validate(authSchemas.login), authController.login);
router.post('/register', validate(authSchemas.register), authController.register);
router.get('/current', requireAuth, authController.current);

export default router;
