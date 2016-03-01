var server = require('./server');
var resources = require('./resources');

// Queries
server.get('/search', resources.search.taxon);
