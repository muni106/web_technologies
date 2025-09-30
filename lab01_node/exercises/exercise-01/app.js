const routes = require('./routes');
const http = require('http');

const server = http.createServer(routes.handler);

const PORT = 8080

server.listen(PORT, () => console.log("diocancaro"));


