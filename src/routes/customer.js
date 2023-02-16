'use strict';

const express = require('express');
const { customerModel } = require('../models/index');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customers = await customerModel.findAll();
  res.status(200).send(customers);
});

router.get('/customer/1', async (req, res, next) => {
  const customers = await customerModel.findOne({
    where: {
      id: req.query.id,
    },
  });
  res.status(200).send(customers);
});

router.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await customerModel.create(req.body);
    res.status(200).send(newCustomer);
  } catch (error) {
    next(error);
  }
});

router.put('/customer/1', async (req, res, next) => {
  // let updatedBody = req.body;

  // const oneCustomer = await customerModel.findOne({
  //   where: {
  //     id: req.query.id,
  //   },
  // });
  
  // const updatedCustomer = await oneCustomer.update(updatedBody);

  const updatedCustomer = await customerModel.update(req.body, {
    where: {
      id: req.query.id,
    },
    returning: true,
  });
 
  res.status(200).send(updatedCustomer[1]);
});

router.delete('/customer/1', async (req, res, next) => {

  // const oneCustomer = await customerModel.findOne({
  //   where: {
  //     id: req.query.id,
  //   },
  // });
  
  // const customerToDelete = await customerModel.destroy(oneCustomer);

  const customer = await customerModel.destroy({
    where: {
      id: req.query.id,
    },
  });

  res.status(200).send('Customer Deleted!');
});



module.exports = router;