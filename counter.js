var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
  console.log('New connection');
  userCount++;

  response.writeHead(200, {'Content-Type': 'text/plain'})
})
