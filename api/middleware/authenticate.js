const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.header.authorization.split(' ');
        const decode = jwt.verify(token, 'SECRET');

        req.user = decode;
        next();

    } catch (error) {
        res.status(500).json({
            message: 'Authentication failed',
            data: error
        });
    }
}

module.exports = authenticate;