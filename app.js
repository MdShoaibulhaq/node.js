const http = require('http');

const PORT = 80;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from Node.js App on EC2!</h1>');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
