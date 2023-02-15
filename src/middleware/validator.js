'use strict';

const validator = (req, res, next) => {
  const name = req.query.name;

  if (name) 
  {
    //sends the request through when valid
    next();
  }
  else
  {
    //forces an error when not
    next('ERROR...No Name');
  }
};

module.exports = validator;