var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://resolver.globalnames.org',
  version: '*'
});

var $v = 0;

client.post("/name_resolvers", { names: "eucariota"}, function(err, req, res, obj){
  console.log("Outside");
  client.post("/name_resolvers", { names: "eucariota"}, function(derr, dreq, dres, dobj){
      console.log(dres);
  });

  console.log("End outside")
});
