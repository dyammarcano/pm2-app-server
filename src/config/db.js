const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/hotel';

mongoose.connect(dburl);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${ dburl }`);
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose connection error: ${ err }`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected`);
});

module.exports.mongoose;
