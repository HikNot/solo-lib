const express = require('express');
const { verifyRefreshToken } = require('../middlewares/verifyRefreshToken');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookieConfig');

const tokenRouter = express.Router();

tokenRouter.get('/refresh', verifyRefreshToken, async (req, res) => {
  const { user } = res.locals;
  const { accessToken, refreshToken } = generateTokens({
    user,
  });

  res
    .cookie('refreshToken', refreshToken, cookieConfig)
    .json({ user, accessToken });
});

module.exports = tokenRouter;
