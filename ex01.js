var Hapi = require('hapi');
var server = Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8000)
});

server.route({
  path: '/',
  method: 'GET',
  handler: function(request, reply) {
    reply('Hello hapi');
  }
});

server.start(function() {});