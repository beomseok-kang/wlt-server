const mongoose = require('mongoose');
const roomArr = require('../teams');
const { pascalize } = require('../utils/funcUtils');

const { Schema } = mongoose;

const roomChatSchema = new Schema({
    room: {
        type: String,
        required: true
    },
    userIp: {
        type: String,
        required: true
    },
    chat: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const teamsSchema = {};
roomArr.forEach(team => teamsSchema[team] = mongoose.model(pascalize(team), roomChatSchema, team));

module.exports = teamsSchema;