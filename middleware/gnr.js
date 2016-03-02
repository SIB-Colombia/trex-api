var restify = require('restify');

module.exports = function gnr(){
  return restify.createJsonClient({
    url: 'http://resolver.globalnames.org',
    version: '*'
  });
};
