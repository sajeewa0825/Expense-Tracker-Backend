const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    try {
        const accessToken = req.headers.authorization.replace('Bearer ', ''); // get token from header
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.userData = decoded; // add user data to request
        console.log(decoded);
    }catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }

    next();
}

module.exports = auth;
