const express = require('express');
const { User } = require('../../db/models');
const userRouter = express.Router();

userRouter.route('/').get(async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = userRouter;