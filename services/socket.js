const SocketIO = require("socket.io");
const logger = require("../logger");

module.exports = (server, app) => {
  const io = SocketIO(server, { path: "/socket" });
  app.set("io", io);
  const room = io.of("/room");
  const numPeople = {
    af: 0,
    dwg: 0,
    drx: 0,
    hle: 0,
    t1: 0,
    gen: 0,
    kt: 0,
    sb: 0,
    sp: 0,
    dyn: 0,
  };
  app.set("numpeople", numPeople);

  room.on("connection", (socket) => {
    const req = socket.request;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const teamName = req._query.team;

    // join namespace room of teamName
    socket.join(teamName);
    numPeople[teamName] += 1;
    console.log(teamName);

    // socket disconnection
    socket.on("disconnect", () => {
      socket.leave(teamName);
      numPeople[teamName] -= 1;
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
