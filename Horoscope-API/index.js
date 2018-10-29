const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.get('/', (req, res) => {
    //the scrapping magic will go here
})

app.listen('8080');

console.log('API is running on http://localhost:8080');

module.exports == app;
