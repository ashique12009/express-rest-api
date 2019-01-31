const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'All contacts'
    });
});

router.post('/', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;

    res.status(200).json({
        message: 'POST call',
        name: name,
        email: email
    });
});

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