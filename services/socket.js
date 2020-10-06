const SocketIO = require("socket.io");
const logger = require("../logger");

module.exports = (server, app) => {
  const io = SocketIO(server, { path: "/socket" });
  app.set("io", io);
  const room = io.of("/room");

  room.on("connection", (socket) => {
    const req = socket.request;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const teamName = req._query.team;

    // join namespace room of teamName
    socket.join(teamName);
    console.log(teamName);

    // socket disconnection
    socket.on("disconnect", () => {
      socket.leave(teamName);
    });

    // chatting emit to room (to sockets in the same room)
    socket.on("chat", (data) => {
      logger.info(`new chat: ${teamName}, ${data.chat} ___ ${ip}`);
      socket.to(teamName).emit("new-chat", data);
    });

    // socket error
    socket.on("error", (err) => {
      logger.error(err);
    });

    // socket
  });
};
