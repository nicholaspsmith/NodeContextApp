var http = require('http');
var ContextIO = require('contextio');
var ctxCfg = require('./contextConfig');

var ctxioClient = new ContextIO.Client({
  key: ctxCfg.key,
  secret: ctxCfg.secret
});

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);
