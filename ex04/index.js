var Hapi = require('hapi')
var Inert = require('inert')
var path = require('path')
var server = new Hapi.Server()

server.register(Inert, function(err) {
  if (err) throw err
})

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
})

server.route({
  method: 'GET',
  path: '/foo/bar/baz/{filename}',
  handler: {
    directory: {
      path: path.join(__dirname, 'public')
    }
  }
})

server.start(function() {})
