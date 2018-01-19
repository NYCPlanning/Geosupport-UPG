var through = require('through3');

/**
 *  Parses newline delimited JSON to objects.
 *
 *  @module {constructor} AstParser
 */
function AstParser(opts) {
  opts = opts || {};
}

/**
 *  Stream transform.
 *
 *  @private {function} transform
 *  @member AstParser
 *  @param {Array} ast input AST document.
 *  @param {String} encoding character encoding.
 *  @param {Function} callback function.
 */
function transform(ast, encoding, cb) {
  // empty lines
  if(!ast) {
    return cb(); 
  }

  var res;

  try {
    res = JSON.parse(ast);
  }catch(e) {
    return cb(e); 
  }

  this.push(res);
  cb();
}

module.exports = through.transform(transform, {ctor: AstParser})
