import { Router } from 'express';
import authRouter from './auth';

const router = Router();

router.get('/test', (req, res) => {
    return res.json({
        message: 'This is test.',
    });
});

router.use('/auth', authRouter);

export default router;
