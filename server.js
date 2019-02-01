const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const contactRoute = require('./api/routes/contact');
const userRoute = require('./api/routes/user');
const cors = require('cors');
const mongoose = require('mongoose');

// DB connection 
mongoose.connect('mongodb://localhost:27017/contacts-db');
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Database connected!');
});

// Package using statements/initialising related code 
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route related code
app.use('/api/contact', contactRoute);
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send('<div><h1>Welcome to home page ok</h1></div>');
});

// Server related code
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});