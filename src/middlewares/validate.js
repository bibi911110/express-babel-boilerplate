const validate = (schema) => async (req, res, next) => {
    const result = await schema.validate(req.body);

    if (result.error) {
        return res.status(400).json({
            message: result.error.details[0].message,
        });
    }

    next();
};

export default validate;
