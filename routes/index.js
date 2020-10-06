const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.end("hello world!");
});

module.exports = router;
