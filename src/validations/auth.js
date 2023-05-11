import Joi from 'joi';

const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const register = Joi.object({
    name: Joi.string().alphanum().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

export default {
    login,
    register,
};
