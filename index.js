'use strict';

require('dotenv').config();
const { sequelizeDatabase } = require('./src/models/index');
const { start } = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch((err) => console.error(err));

