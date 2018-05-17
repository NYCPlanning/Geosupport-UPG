var through = require('through3')
  , Node = require('./node');

// @todo - rename this to collator

/**
 *  Converts newline delimited JSON to AST nodes.
 *
 *  @module {constructor} Deserialize
 *  @param {Object} [opts] stream options.
 */
function Deserialize(opts) {
  opts = opts || {};
  this.doc = null;
  this.open = 0;
}

/**
 *  Stream transform.
 *
 *  @private {function} transform
 *  @member Deserialize
 *
 *  @param {Array} node input AST node.
 *  @param {String} encoding character encoding.
 *  @param {Function} callback function.
 */
function transform(chunk, encoding, cb) {

  var node = Node.createNode(chunk.type, chunk)
    , isDocument = Node.is(node, Node.DOCUMENT)
    , isEof = Node.is(node, Node.EOF)
    , isMeta = isEof;

  if(isDocument) {
    this.open++; 
  }

  if(isEof) {
    this.open--; 
  }

  var completed = isEof && this.open === 0;

  // handle document nodes
  if(isDocument) {

    // create root document
    if(!this.doc) {
      this.doc = Node.createDocument(chunk, chunk.sourcepos);
    // append children of nested document
    }else{
      var next = chunk.firstChild;
      while(next) {
        this.doc.appendChild(Node.deserialize(next));
        next = next.next; 
      }
    }

  // attach to current doc
  }else if(this.doc && !completed) {
    this.doc.appendChild(Node.deserialize(chunk));

  // got EOF with a valid root doc, flush it
  }else if(this.doc && completed) {
    this.push(this.doc);
    this.emit(Node.EOF, this.doc);
    this.doc = null;

  // concrete node (non-meta node) that does not 
  // have a parent
  }else if(!isMeta) {
    var doc = Node.createDocumentFragment(chunk, {fragment: true});
    this.push(doc);
    this.push(Node.createNode(Node.EOF, {fragment: true}));
    this.emit('fragment', doc);
  }

  cb();
}

module.exports = through.transform(transform, {ctor: Deserialize})
