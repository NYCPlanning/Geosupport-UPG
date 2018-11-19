var through = require('through3')
  , Node = require('./node')
  , EOL = require('os').EOL;

function Serializer(opts) {
  opts = opts || {};
  this.indent = opts.indent || 0;
  this.stringify = opts.stringify !== undefined ? opts.stringify : true;
}

/**
 *  Stream transform.
 *
 *  @private {function} transform
 *  @member AstSerialize
 *  @param {Array} ast input AST document.
 *  @param {String} encoding character encoding.
 *  @param {Function} callback function.
 */
function transform(ast, encoding, cb) {
  //console.dir(ast);
  var res = Node.serialize(ast);
  if(this.stringify) {
    this.push(JSON.stringify(res, undefined, this.indent) + EOL);
  }else{
    this.push(res);
  }
  cb();
}

module.exports = through.transform(transform, {ctor: Serializer});
