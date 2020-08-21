const SocketIO = require('socket.io');
const axios = require('axios');

module.exports = (server, app, sessionMiddleware) => {
    const io = SocketIO(server, { path: '/socket' });
    app.set('io', io);
    const room = io.of('/room');

    io.use((socket, next) => {
        sessionMiddleware(socket.request, socket.request.res, next);
    });

    room.on('connection', (socket) => {
        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const teamName = 'all';

        // join namespace room of teamName
        socket.join(teamName);


        // socket disconnection
        socket.on('disconnect', () => {
            console.log('Client Exit: ', ip, socket.id);
            socket.leave(teamName);
        });

        // chatting emit to room (to sockets in the same room)
        socket.on('chat', (data) => {
            socket.to(data.room).emit(data);
        })

        // socket error
        socket.on('error', (err) => {
            console.error(err);
        });

        // socket

    });
};