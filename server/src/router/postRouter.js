const express = require('express');
const { User, Post } = require('../../db/models');
const postRouter = express.Router();
const { verifyAccessToken } = require('../middlewares/verifyRefreshToken');

postRouter.route('/').get(async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: User,
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

postRouter
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findAll({ where: { userId: id } , include: User });
      res.status(200).json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
      const newPost = await Post.create({
        title,
        body,
        userId: res.locals.user.id,
      });
      res.status(201).json(newPost);

      const plainPost = await Post.findOne({
        where: { id: newPost.id },
        include: {
          model: User,
          attributes: ['id', 'name', 'email'],
        },
      });
      res.json(plainPost);
    } catch (err) {
      console.log(err);
    }
  })
  .delete(verifyAccessToken, async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.destroy({ where: { id } });
      res.status(200).json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .patch(verifyAccessToken, async (req, res) => {
    try {
      const { id } = req.params;

      const updateData = {};
      for (const key in req.body) {
        if (req.body[key]) {
          updateData[key] = req.body[key];
        }
      }

      await Post.update(updateData, { where: { id } });
      const updatedPost = await Post.findByPk(id);
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = postRouter;
