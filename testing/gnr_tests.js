var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://resolver.globalnames.org',
  version: '*'
});

client.post("/name_resolvers", { names: "eucariota"}, function(err, req, res, obj){
  client.post("/name_resolvers", { names: "eucariota"}, function(derr, dreq, dres, dobj){
      console.log(dres);
  });
});
