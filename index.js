const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from GitHub Actions CI/CD on Amazon Linux 2023 🚀');
});

server.listen(3000, () => {
  console.log('App running on port 3000');
});
