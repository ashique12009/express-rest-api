const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

router.get('/', contactController.getAllContactController);

router.post('/', contactController.postNewContactController);

router.get('/:id', contactController.getSingleContact);

router.put('/:id', contactController.editContact);

router.delete('/:id', contactController.deleteContact);

module.exports = router;