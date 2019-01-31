const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 3
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true
    },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;