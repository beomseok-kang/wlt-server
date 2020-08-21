const mongoose = require('mongoose');

const { MONGO_ID, MONGO_PASSWORD, MONGO_DBNAME, NODE_ENV } = process.env;

const MONGO_URL = `mongodb+srv://${MONGO_ID}:${MONGO_PASSWORD}` +
    `@cluster0.gzvvn.gcp.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`;

// connect to mongo db
const connect = () => {
    if (NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    mongoose.connect(MONGO_URL, {
        dbName: 'wlt',
        useNewUrlParser: true,
        useCreateIndex: true
    }, (err) => {
        if (err) {
            console.error('MongoDB Connection Error: ', err);
        } else {
            console.log('MongoDB Connected')
        }
    });
};

// error handling
mongoose.connection.on('error', (err) => {
    console.error('MongoDB Connection Error: ', err);
});

// mongo db disconnection
mongoose.connection.on('disconnected', () => {
    console.error('MongoDB Disconnected. Reconnecting...');
    connect();
});

module.exports = connect;