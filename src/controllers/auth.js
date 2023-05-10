import User from '../models/user';
import { CustomError } from '../utils/errorHandler';

const login = (req, res, next) => {
    try {
        throw new CustomError(401, 'Custom Error Test');
    } catch (error) {
        next(error);
    }
};

const register = (req, res) => {
    try {
    } catch (error) {
        next(error);
    }
};

export default {
    login,
    register,
};
