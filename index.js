var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 1080;

server.listen(port, function(){
  console.log('T-Rex API server listening on %j', server.address());
});
