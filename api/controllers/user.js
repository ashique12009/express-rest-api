const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerController = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if ( err ) {
            res.json({
                data: err
            });
        }
        let user = new User({
            email: req.body.email,
            password: hash
        });

        user.save()
            .then(data => {
                res.status(200).json({
                    message: 'User created',
                    data: data
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Error',
                    data: err
                });
            });
    });
}

const getAllUser = (req, res, next) => {
    User.find()
        .then(data => {
            res.status(200).json({
                message: 'User fetched',
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error',
                data: err
            });
        });
}

module.exports = {
    registerController,
    getAllUser
};