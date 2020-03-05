var through = require('through3')
  , Node = require('./node');

function Converter() {}

/**
 *  Stream transform.
 *
 *  @private {function} transform
 *  @member Converter
 *  @param {Array} chunk input deserialized object.
 *  @param {String} encoding character encoding.
 *  @param {Function} callback function.
 */
function transform(chunk, encoding, cb) {
  this.push(Node.deserialize(chunk));
  cb();
}

module.exports = through.transform(transform, {ctor: Converter});
