const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('App deployed successfully on k8s app !\n');
});

server.listen(3002, () => {
  console.log('Server running on port 3002');
});
