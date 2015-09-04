var Hapi = require('hapi');
var server = Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8000)
});