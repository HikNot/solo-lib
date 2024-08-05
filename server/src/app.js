const express = require('express');
const morgan = require('morgan');
const {createServer} = require('http');
const cookieParser = require('cookie-parser');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const authRouter = require('./router/authRouter');
const tokenRouter = require('./router/tokensRouter');
const likeRouter = require('./router/likeRouter');
const commentRouter = require('./router/commentRouter');
const upgradeCb = require('./ws/upgrade');
const wsServer = require('./ws/wsServer');
const connection = require('./ws/connection');

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

const server = createServer(app);

server.on('upgrade', upgradeCb)
wsServer.on('connection', connection)

module.exports = server;
