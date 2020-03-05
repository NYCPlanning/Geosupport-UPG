var through = require('through3')
  , Node = require('./node')
  , detach = require('./detach');

function Walk(opts) {
  opts = opts || {};
  this.EOF = opts.eof;
}

/**
 *  Stream transform.
 *
 *  @private {function} transform
 *  @member AstWalk
 *  @param {Array} chunk input AST node.
 *  @param {String} encoding character encoding.
 *  @param {Function} callback function.
 */
function transform(chunk, encoding, cb) {

  // expand child nodes of documents, this creates a pseudo stream
  // from the input document
  if(chunk.type === Node.DOCUMENT) {
    var nodes = [];

    // push direct descendants
    var next = chunk.firstChild;
    while(next) {
      nodes.push(next);
      next = next.next;
    }

    // trim document chunk
    detach(chunk);
    this.push(chunk);

    for(var i = 0;i < nodes.length;i++) {
      this.push(nodes[i]); 
    }

    // extension to signal end of document
    if(this.EOF !== false) {
      this.push(Node.createNode(Node.EOF, {file: chunk.file}));
    }

  // pass through other nodes
  }else{
    this.push(chunk);
  }
  cb();
}

module.exports = through.transform(transform, {ctor: Walk});
