const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello world',
        author: 'Rinzin'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {name: 'Rinzin', age: 21},
        {name: 'Kinley', age: 22}
    ]);
});

app.listen(3000);

module.exports.app = app;