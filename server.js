var http = require('http');

http.createServer(function (req, res) {
  response.writeHead(200);
  response.write("request is running.");
  setTimeout(function(){
    response.write("request is done.");
    response.end();
  }, 5000);
}).listen(8080);
