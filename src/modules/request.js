const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const crc32 = require('js-crc').crc32;
const network = require('os').networkInterfaces();
const moment = require('moment');

moment().format();

let xhr = new XMLHttpRequest();

const config = {
  server: "http://api.node05.comxa.com",
  seconds: 3600000
}

const options = {
  url: config.server,
  method: 'POST',
  headers: {
    'User-Agent': 'Super Agent/0.0.1',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    address: network.eth0[0].address,
    mac: network.eth0[0].mac,
    family: network.eth0[0].family,
    netmask: network.eth0[0].netmask,
    crc: crc32(network.eth0[0].mac).toUpperCase(),
    local_time: moment().unix(),
    info: "control de asistencia hotel eurobuilding",
    type: 'synchronization'
  }
};

xhr.open('POST', config.server, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = () => {
  // do something to response
  console.log(this.responseText);
};

xhr.send('user=person&pwd=password&organization=place&requiredkey=key');
