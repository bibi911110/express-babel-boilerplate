class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);

        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'INTERNAL_ERROR';

    return res.status(statusCode).json({
        message: errorMessage,
    });
};

export { CustomError, errorHandler };
