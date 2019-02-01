const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/users', userController.getAllUser);

router.post('/login', (req, res, next) => {

});

router.post('/register', userController.registerController);

module.exports = router;