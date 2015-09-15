// basic http echo server
var http = require('http');
var server = http.createServer(function (req, res) {
  req.pipe(res);
});
server.listen(process.env.PORT || 3000);