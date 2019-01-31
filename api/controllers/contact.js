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

const getSingleContact = (req, res, next) => {
    let id = req.params.id;
    
    Contact.findById(id)
        .then(data => {
            res.status(200).json({
                message: 'Data fetched',
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

const deleteContact = (req, res, next) => {
    let id = req.params.id;

    Contact.findByIdAndRemove(id)
        .then(data => {
            res.status(200).json({
                message: 'Contact deleted',
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

const editContact = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

    Contact.findByIdAndUpdate(id, {$set: updatedContact})
        .then(data => {
            res.status(200).json({
                message: 'Data updated',
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
    getAllContactController,
    postNewContactController,
    getSingleContact,
    deleteContact,
    editContact
}