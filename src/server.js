'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res) => {
  const message = `What a fine day for development`;
  res.status(200).send(message);
});

app.get('/person', logger, validator, (req, res, next) => {
  //const person = {name: req.query.name};
  res.status(200).json(req.query);
});

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`)); 
};

module.exports = {start, app};