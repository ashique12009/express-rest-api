const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

router.get('/', contactController.getAllContactController);

router.post('/', contactController.postNewContactController);

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `ID is : ${id}`
    });
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({

    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({

    });
});

module.exports = router;