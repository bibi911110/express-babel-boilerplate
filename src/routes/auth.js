import { Router } from 'express';
import authController from '../controllers/auth';
import validate from '../utils/validate';
import authSchemas from '../validations/auth';

const router = Router();

router.post('/login', validate(authSchemas.login), authController.login);
router.post('/register', validate(authSchemas.register), authController.register);

export default router;
