"use strict";

const pmx = require('pmx');
const app = require('express')();
const moment = require('moment');
const server = require('http').Server(app);
const io = require('socket.io').listen(server);
const rooms = require('./rooms'); // TODO manage rooms.

/* TODO id para la api */

const conf = pmx.initModule(); // TODO configure pm2 integration.

require('./config/db');

let port = 9801;

const sessions = [];
const clients = [];
const logs = [];

const connections = {
  sessions,
  clients,
  logs,
};

rooms(io, connections);

server.listen(port, () => {
  console.log(`Socket.io Server on port ${ port } is now Running...`);
});
