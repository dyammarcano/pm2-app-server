'use strict';

const moment = require('moment');

module.exports = (io, connections) => {

  io.of('/').on('connection', socket => {
    console.log(`Client ${ socket.id } is Connected to Server`);
    connections.clients.push(socket);

    socket.on('echo', req => {
      socket.emit('echo', req);
    });

    setInterval(() => {
      io.emit('timestamp', moment().unix());
    }, 500);

    socket.on('disconnect', msg => {
      console.log(`Client ${ socket.id } is Disconnect to Server`);
      connections.clients.splice(connections.clients.indexOf(socket), 1);
    });
  });
};
