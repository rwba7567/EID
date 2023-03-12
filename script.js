const http = require('http');

// initialize button state to 'off'
let buttonState = 'off';

// create HTTP server to listen for incoming requests
const server = http.createServer((req, res) => {
  // check if incoming request is a POST request
  if (req.method === 'POST') {
    let body = '';
    // listen for incoming data
    req.on('data', (data) => {
      body += data;
    });
    // when all data is received, parse it and update button state
    req.on('end', () => {
      const postData = JSON.parse(body);
      buttonState = postData.buttonState;
      console.log(`Button state is now ${buttonState}`);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(`Button state is now ${buttonState}`);
    });
  } else {
    // return current button state for GET requests
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Button state is currently ${buttonState}`);
  }
});

// start HTTP server
server.listen(8080, () => {
  console.log('HTTP server listening on port 8080');
});