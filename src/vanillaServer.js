// import http from 'http';
const http = require('http');

const server = http.createServer(function (req, res) {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'henlo' }));
    res.end();
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('server listenting on ' + PORT);
});
