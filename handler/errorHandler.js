const errorHandler = (err, req, res, next) => {
    console.log(err);
    if(err){
        res.status(400).json({
            status: 'error',
            message: err
        })
    }else{
        next();
    }
};

module.exports = errorHandler;