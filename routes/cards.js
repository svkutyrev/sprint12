
const cards = require('express').Router();
const dataCards = require('../data/cards');

cards.get('/cards', (req, res) => {
  res.send(dataCards);
});


module.exports = cards;
