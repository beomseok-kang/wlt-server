const express = require('express');

const roomChat = require('../schemas/roomChat');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.end(roomChat.toString());
    console.log(roomChat);
});

module.exports = router;