const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<div><h1>Welcome to home page ok</h1></div>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});