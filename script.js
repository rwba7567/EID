const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log(`Received POST request with body: ${body}`);
      res.end('Success');
    });
  } else {
    res.end('Invalid request method');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});