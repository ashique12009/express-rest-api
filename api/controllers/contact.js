const Contact = require('../models/Contact');

const getAllContactController = (req, res, next) => {
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
}

const postNewContactController = (req, res, next) => {
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
}

module.exports = {
    getAllContactController,
    postNewContactController
}