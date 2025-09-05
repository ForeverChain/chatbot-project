// This file ensures compatibility with systems that expect index.js as the entry point
// It simply exports the server application

const server = require('./server.js');

module.exports = server;