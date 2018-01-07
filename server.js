var restify = require('restify');
var bunyan = require('bunyan');

var options = {
  name: "T-Rex API"
};

var server = restify.createServer(options);

server.use(restify.plugins.bodyParser({
  maxBodySize: 10 *1024
}));

server.use(function(req, res, next){
  // TODO:  Append logging requests
  next();
});

server.on('after', restify.plugins.auditLogger({
  log: bunyan.createLogger({
    name: 'audit',
    streams: [{
      type: 'rotating-file',
      path: 'log/t-rex.log',
      period: '1d',
    },
    {
      stream: process.stdout
    }]
  }),
  server: server,
  event: 'pre',
  printLog : true
}));

module.exports = server;

require('./routes');
