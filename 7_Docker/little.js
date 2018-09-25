var http = require('http');

http.createServer(function (request, response) {
  response.write('Helo World!');
  response.end();
}).listen(1234);
