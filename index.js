const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(require('./db.js')())
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8080;

server.use(middlewares)
server.use(router)

server.listen(port, () => console.log(`server started\nVisit http://localhost:${port}/`));