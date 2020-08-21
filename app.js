const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const indexRouter = require('./routes');
const webSocket = require('./services/socket');
const connectToMongo = require('./schemas');
const sessionMiddleware = require('./middlewares/session');

const app = express();

// app setting
app.set('port', process.env.PORT || 8000);
// connect to MongoDB
connectToMongo();

// middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);

// router
app.use('/', indexRouter);

// favicon and other 404
app.get('/favicon.ico', (req, res) => res.status(204));
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

// error handler
app.use((err, req, res, next) => {
    console.error(err);
});

// server (listener)
const server = app.listen(app.get('port'));

webSocket(server, app, sessionMiddleware);