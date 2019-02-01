const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

const loginController = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email: email})
        .then(data => {
            if ( data ) {
                bcrypt.compare(password, data.password, (err, result) => {
                    if ( err ) {
                        res.status(500).json({
                            message: 'Error',
                            data: err
                        });
                    }
                    if ( result ) {
                        let token = jwt.sign({email: data.email, id: data._id}, 'SECRET', {expiresIn: '2h'});

                        res.status(200).json({
                            message: 'Login successful and token given',
                            data: token
                        });
                    }
                    else {
                        res.status(500).json({
                            message: 'Invalid login'
                        });
                    }
                });
            }
            else {
                res.status(500).json({
                    message: 'User not found'
                });
            }
        })
        .catch();

}

module.exports = {
    registerController,
    getAllUser,
    loginController
};