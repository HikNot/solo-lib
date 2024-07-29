const express = require('express');
const { Like, User, Post } = require('../../db/models');
const likeRouter = express.Router();
const { verifyAccessToken } = require('../middlewares/verifyRefreshToken');

likeRouter.route('/:id').post(verifyAccessToken, async (req, res) => {
  try {
    const existingLike = await Like.findOne({
      where: {
        userId: res.locals.user.id,
        postId: req.params.id,
      },
    });

    if (existingLike) {
      await Like.destroy({
        where: {
          userId: res.locals.user.id,
          postId: req.params.id,
        },
      });
      const post = await Post.findOne({
        where: { id: req.params.id },
        include: [User, Like],
      });
      return res.json(post);
    } else {
      const newLike = await Like.create({
        userId: res.locals.user.id,
        postId: req.params.id,
      });
      const post = await Post.findOne({
        where: { id: req.params.id },
        include: [User, Like],
      });
      return res.json(post);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = likeRouter;
