const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authenticate = require('../middleware/authenticate');

router.get('/users', authenticate, userController.getAllUser);

router.post('/login', userController.loginController);

router.post('/register', userController.registerController);

module.exports = router;