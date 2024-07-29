const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const authRouter = require('./router/authRouter');
const tokenRouter = require('./router/tokensRouter');
const likeRouter = require('./router/likeRouter');
const commentRouter = require('./router/commentRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/likes', likeRouter);
app.use('/api/comments', commentRouter)

module.exports = app;
