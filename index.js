const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var h = require('./piousbox-render.js')
console.log('+++ H:', h)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

