module.exports = (handle) => {
  const express = require("express");
  const session = require("express-session");
  const path = require("path");
  const morgan = require("morgan");
  const cookieParser = require("cookie-parser");
  const dotenv = require("dotenv");

  dotenv.config();

  const webSocket = require("./services/socket");
  const logger = require("./logger");

  const app = express();

  app.set("port", process.env.NODE_ENV === "production" ? 80 : 8000);
  app.disable("x-powered-by");

  // middlewares
  if (process.env.NODE_ENV === "production") {
    app.use(morgan("combined"));
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

  app.post("/admin/login", (req, res) => {
    const { id, pw } = req.body;
    const { ADMIN_ID, ADMIN_PASSWORD } = process.env;
    if (id === ADMIN_ID && pw === ADMIN_PASSWORD) {
      return res.status(200).send("correct credential");
    } else {
      return res.status(500).send("incorrect credential");
    }
  });

  app.post("/admin/posturl", (req, res) => {
    const data = req.body;
    console.log(data);
    const fs = require("fs");
    fs.writeFile("./client/url.json", JSON.stringify(data), "utf8", (err) => {
      console.error(err);
      return res.status(500).send("error: " + err);
    });
    return res.status(200).send("successfully changed");
  });

  app.get("/api/numpeople", (req, res) => {
    const numPeople = app.get("numpeople");
    return res.status(200).json(numPeople);
  });

  // router
  app.get("/", (req, res) => {
    return app.render(req, res, "/");
  });
  app.get("*", (req, res) => {
    return handle(req, res);
  });

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
};
