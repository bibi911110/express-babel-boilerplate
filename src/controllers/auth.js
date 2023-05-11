import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';
import { CustomError } from '../utils/errorHandler';

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new CustomError(401, 'Unauthorized');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new CustomError(401, 'Unauthorized');
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(payload, config.jwt.secret, {
            expiresIn: config.jwt.expiresIn,
        });

        return res.json({
            user: {
                id: user.id,
                name: user.name,
            },
            token,
        });
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            throw new CustomError(422, 'Email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const payload = {
            user: {
                id: newUser.id,
            },
        };

        const token = jwt.sign(payload, config.jwt.secret, {
            expiresIn: config.jwt.expiresIn,
        });

        return res.json({
            user: {
                id: newUser.id,
                name: newUser.name,
            },
            token,
        });
    } catch (error) {
        next(error);
    }
};

const current = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { id: req.user.id },
            attributes: ['id', 'name', 'email'],
        });

        return res.json(user);
    } catch (error) {
        next(error);
    }
};

export default {
    login,
    register,
    current,
};
