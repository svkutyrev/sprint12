const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const router = require('./routes/users');
const cards = require('./routes/cards');
const pages = require('./routes/pages');


const { PORT = 3000 } = process.env;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', router);
app.use('/', cards);
app.use('/', pages);

app.listen(PORT);