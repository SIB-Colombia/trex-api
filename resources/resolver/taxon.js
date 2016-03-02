var gnr = require('../../middleware/gnr');

module.exports = function resolveTaxons(req, res, next){
   gnr().post('/name_resolvers.json', req.params, function(dres, dreq, dres, dobj){
     res.send(dobj);
  });
};
