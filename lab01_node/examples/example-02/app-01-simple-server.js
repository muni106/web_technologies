/* example-02/app-01-simple-server.js */

const http = require('http');

const server = http.createServer((req, res)=> {
  res.write('Hello World!');
  res.end();
});

server.listen(8080);
