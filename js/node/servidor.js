const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola, Fernando! Bienvenido a tu servidor Node.js 🚀');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});