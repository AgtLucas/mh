var Hapi = require('hapi')
var Vision = require('vision')
var path = require('path')
var server = new Hapi.Server()

server.register(Vision, function(err) {
  if (err) throw err
})

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
})

server.views({
  engines: {
    html: require('handlebars')
  },
  path: path.join(__dirname, 'templates')
})

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html'
  }
})

server.start(function() {})
