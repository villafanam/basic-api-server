'use strict';

const logger = (req, res, next) => {
  let path = req.path;
  let method = req.method;
  //console.log(`Log info: \n ${req.path}, \n ${req.method}`);
  console.log({method, path});
  next();
};

module.exports = logger;