var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/'});
  res.write(req.url);
  res.end();
}).listen(8080);

console.log(`Listening on port 8080!`);