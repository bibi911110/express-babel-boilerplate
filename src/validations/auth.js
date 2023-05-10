import Joi from 'joi';

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const registerSchema = Joi.object({
    username: Joi.string().alphanum().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

export default {
    loginSchema,
    registerSchema,
};
