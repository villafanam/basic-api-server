'use strict';

const express = require('express');
const { foodModel } = require('../models/index');

const router = express.Router();


router.get('/food/', async (req, res, next) => {
  const food = await foodModel.findAll();
  res.status(200).send(food);
});

router.get('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  const singleFood = await foodModel.findOne({
    where: {
      id,
      // id: req.params.id,
    },
  });
  res.status(200).send(singleFood);
});

router.post('/food', async (req, res, next) => {
  try 
  {
    const newFood = await foodModel.create(req.body);
    res.status(200).send(newFood);
  } 
  catch (error) 
  {
    next(error);
  }
});

router.put('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  const singleFood = await foodModel.findOne({
    where: {
      id,
      // id: req.params.id,
    },
  });

  const itemsModified = await singleFood.update(req.body);
  res.status(200).send(itemsModified);
});

router.delete('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  const itemsDeleted = await foodModel.destroy({where: {id}});
  res.status(200).send('Food Deleted!');
});


module.exports = router;