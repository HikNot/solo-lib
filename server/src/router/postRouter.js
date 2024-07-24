const express = require('express');
const { Post } = require('../../db/models');
const postRouter = express.Router();

postRouter.route('/').get(async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = postRouter;