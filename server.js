var restify = require('restify');

var options = {
  name: "T-Rex API"
};

var server = restify.createServer(options);

module.exports = server;

require('./routes');
