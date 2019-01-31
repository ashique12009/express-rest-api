const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');

router.get('/', (req, res, next) => {
    Contact.find()
        .then(data => {
            res.status(200).json({
                message: 'All contacts',
                data: data
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error',
                data: err
            });
        });
});

router.post('/', (req, res, next) => {

    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
    });

    contact.save()
        .then(data => {
            res.status(201).json({
                message: 'Contact added',
                data: data
            })
        })
        .catch(err => console.log(err));
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