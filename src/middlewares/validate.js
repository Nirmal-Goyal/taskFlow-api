const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch(error){
        return res.status(400).json({
            msg: "Validation failed",
            errors: error.issues,
        })
    }
}

export default validate;