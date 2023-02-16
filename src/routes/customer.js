'use strict';

const express = require('express');
const { customerModel } = require('../models/index');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customers = await customerModel.findAll();
  res.status(200).send(customers);
});

router.get('/customer/:id', async (req, res, next) => {
  const { id } = req.params;
  const customers = await customerModel.findOne({
    where: {
      id,
      // id: req.params.id,
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

router.put('/customer/:id', async (req, res, next) => {
  const { id } = req.params;
  const foundCust = await customerModel.findOne({
    where: {
      id,
      // id: req.params.id,
    },
  });

  const updatedCustomer = await foundCust.update(req.body);
  // const updatedCustomer = await customerModel.update(req.body, {
  //   where: {
  //     id: req.params.id,
  //   },
  //   returning: true,
  // });
  //console.log(updatedCustomer[1].dataValues);
  res.status(200).send(updatedCustomer);
});

router.delete('/customer/:id', async (req, res, next) => {

  await customerModel.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).send('Customer Deleted!');
});



module.exports = router;