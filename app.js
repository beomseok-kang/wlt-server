const express = require("express");
const session = require("express-session");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");
const hpp = require("hpp");

dotenv.config();

const indexRouter = require("./routes");
const webSocket = require("./services/socket");
const connectToMongo = require("./schemas");
const logger = require("./logger");

const app = express();

app.set("port", process.env.NODE_ENV === "proeduction" ? 80 : 8000);
// connect to MongoDB
// connectToMongo();

// middlewares
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
} else {
  app.use(morgan("dev"));
}
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

const sessionOptions = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
};
// if (process.env.NODE_ENV === 'production') {
//     sessionOptions.proxy = true;
// }
const sessionMiddleware = session(sessionOptions);
app.use(sessionMiddleware);

// router
app.use("/", indexRouter);

// favicon and other 404
app.get("/favicon.ico", (req, res) => res.status(204));
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// error handler
app.use((err, req, res, next) => {
  logger.error(err);
});

// server (listener)
const server = app.listen(app.get("port"));
webSocket(server, app);
