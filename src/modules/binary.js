const ss = require('socket.io-stream');
const print = require('./print');

module.exports = (io, socket) => {
  ss(socket).on('binary', (stream, data) => {
    print('receive binary file');
  });
};
