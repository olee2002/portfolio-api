const express = require('express');
const Sequelize = require('sequelize');

const Model = require('../models')
console.log(Model.user)
const router = express.Router();

/* GET users listing. */
router.get('/test', async (req, res, next) => {
  const users = await Model.user.findAll({});
  res.json(users);
});
router.post('/test', async (req, res, next) => {
  console.log('req.body', req.body)
});

module.exports = router;
