import { Router } from 'express';
import authRouter from './auth';

const router = Router();

router.get('/test', (req, res) => {
    return res.json({
        message: 'this is test router.',
    });
});

router.use('/auth', authRouter);

export default router;
