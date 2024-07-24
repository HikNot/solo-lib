const express = require('express');
const morgan = require('morgan');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const authRouter = require('./router/authRouter');
const tokenRouter = require('./router/tokensRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/auth', authRouter)
app.use('/api/tokens', tokenRouter)


module.exports = app;