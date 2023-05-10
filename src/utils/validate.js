const validate = (req, res, next) => async (schema) => {
    const result = await schema.validate(req.body);

    if (result.error) {
        return res.status(400).json({
            message: error.details[0].message,
        });
    }

    next();
};

export default validate;
