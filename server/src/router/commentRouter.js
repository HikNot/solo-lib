const express = require('express');
const { Like, User, Post, Comment } = require('../../db/models');
const commentRouter = express.Router();
const { verifyAccessToken } = require('../middlewares/verifyRefreshToken');

commentRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const comments = await Comment.findAll({
        where: { postId: id },
        include: User,
      });
      res.status(200).json(comments);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const comment = await Comment.create({
        body: req.body[0].body,
        userId: res.locals.user.id,
        postId: req.body[1],
      });
      res.status(201).json(comment);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = commentRouter;
