var server     = require('./server');
var resources  = require('./resources');
var validating = require('./middleware/validating');
var schemas    = require('./schemas');

// Queries
server.get('/resolver', validating(schemas.resolver), resources.resolver.taxon);
server.post('/resolver', resources.resolver.taxon);
