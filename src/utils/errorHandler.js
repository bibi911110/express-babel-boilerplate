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

    console.log(err);

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Error';

    return res.status(statusCode).json({
        message: errorMessage,
    });
};

export { CustomError, errorHandler };
