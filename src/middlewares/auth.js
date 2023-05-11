import jwt from 'jsonwebtoken';
import config from '../config';
import { CustomError } from '../utils/errorHandler';

const requireAuth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        throw new CustomError(401, 'Unauthorized');
    }

    try {
        const decoded = jwt.verify(token, config.jwt.secret);

        req.user = decoded.user;
        next();
    } catch (error) {
        throw new CustomError(401, 'Unauthorized');
    }
};

export default requireAuth;
