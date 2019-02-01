const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');
const authenticate = require('../middleware/authenticate');

router.get('/', contactController.getAllContactController);

router.post('/', authenticate, contactController.postNewContactController);

router.get('/:id', contactController.getSingleContact);

router.put('/:id', authenticate, contactController.editContact);

router.delete('/:id', authenticate, contactController.deleteContact);

module.exports = router;