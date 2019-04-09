var app = require('./server/server')

const server = app.listen(3000, 'localhost', function () {
  const { address, port } = server.address()
  console.log("NODE_ENV=" + app.get('env'))
  console.log(`listening to http://${address}:${port}`)
})

