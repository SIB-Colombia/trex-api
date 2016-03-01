module.exports = function validating(schema){
  return function (req, res, next){
    // Validation
    next();
  };
};
