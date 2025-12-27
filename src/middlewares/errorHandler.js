const errorHandler = (err, req, res, next) => {
    console.log(err.stack);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        msg: err.message || "Internal server Error",
    });
};

export default errorHandler;