"use strict";

require('greenlock-express')
  .init({
      packageRoot: __dirname,

      // contact for security and critical bug notices
      maintainerEmail: "beom.kang17@gmail.com",

      // where to look for configuration
      configDir: './greenlock.d',

      // whether or not to run at cloudscale
      cluster: false
  })
  // Serves on 80 and 443
  // Get's SSL certificates magically!
  .ready(httpsWorker);

function httpsWorker(glx) {
  const SocketIO = require('socket.io');
  const logger = require('./logger');
  const server = glx.httpsServer();
  const app = require('./app');

  const io = SocketIO(server, { path: '/socket' });
  app.set('io', io);
  const room = io.of('/room');

  io.use((socket, next) => {
      sessionMiddleware(socket.request, socket.request.res, next);
  });

  room.on('connection', (socket) => {
      const req = socket.request;
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      const teamName = req._query.team;

      // join namespace room of teamName
      socket.join(teamName);
      console.log('hello user! of: ', teamName);

      // socket disconnection
      socket.on('disconnect', () => {
          console.log('Client Exit: ', ip, socket.id);
          socket.leave(teamName);
      });

      // chatting emit to room (to sockets in the same room)
      socket.on('chat', (data) => {
          logger.info(`new chat: ${teamName}, ${data.chat} ___ ${ip}`, );
          socket.to(teamName).emit('new-chat', data);
      });

      // socket error
      socket.on('error', (err) => {
          logger.error(err);
      });

      // socket

  });

  glx.serveApp(app);
}