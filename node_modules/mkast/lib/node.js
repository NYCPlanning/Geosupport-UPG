var Node = require('commonmark/lib/node');

/**
 *  Extend the commonmark Node with useful functionality.
 *
 *  @contructor AstNode
 */
function AstNode() {
  Node.apply(this, arguments);
}

AstNode.prototype = Object.create(Node.prototype);

/**
 *  Determine whether a node is of a given type.
 *
 *  @static {function} is
 *  @param {Node} node the node to test.
 *  @param {String} type the node type to test.
 *
 *  @returns whether the node is of the specified type.
 */
function is(node, type) {
  return node.type === type; 
}

/**
 *  Create a document node.
 *
 *  @static {function} createDocument
 *  @param {Object} [attrs] map of data to assign to the node.
 *  @param {Array} [sourcepos] source position.
 *
 *  @returns a document node.
 */
function createDocument(attrs, sourcepos) {
  var args = Array.prototype.slice.call(arguments);
  if(Array.isArray(attrs)) {
    sourcepos = attrs; 
    attrs = args[1];
  }

  attrs = attrs || {};
  sourcepos = sourcepos || [[1, 1], [0, 0]];

  return AstNode.createNode(
    AstNode.DOCUMENT, attrs, sourcepos);
}

/**
 *  Create a node by type.
 *
 *  @static {function} createNode
 *  @param {String} type node type identifier.
 *  @param {Object} [attrs] map of data to assign to the node.
 *  @param {Array} [sourcepos] source position.
 *
 *  @returns a node of the specified type.
 */
function createNode(type, attrs, sourcepos) {
  if(Array.isArray(attrs) && sourcepos === undefined) {
    sourcepos = attrs; 
    attrs = null;
  }
  var node = new AstNode(type, sourcepos);
  if(attrs) {
    for(var k in attrs) {
      node[k] = attrs[k];
    } 
  }
  return node;
}

/**
 *  Takes a serialized object, converts it to a Node and wraps it 
 *  in a new document.
 *
 *  @static {function} createDocumentFragment
 *  @param {Object} result a serialized node.
 *
 *  @returns a document node.
 */
function createDocumentFragment(result) {
  var doc = AstNode.createDocument();
  doc.appendChild(AstNode.deserialize(result));
  return doc;
}

// commonmark types
AstNode.DOCUMENT = 'document';
AstNode.SOFTBREAK = 'softbreak';
AstNode.LINEBREAK = 'linebreak';
AstNode.LIST = 'list';
AstNode.ITEM = 'item';
AstNode.PARAGRAPH = 'paragraph';
AstNode.TEXT = 'text';
AstNode.HEADING = 'heading';
AstNode.EMPH = 'emph';
AstNode.STRONG = 'strong';
AstNode.LINK = 'link';
AstNode.IMAGE = 'image';
AstNode.CODE = 'code';
AstNode.CODE_BLOCK = 'code_block';
AstNode.BLOCK_QUOTE = 'block_quote';
AstNode.THEMATIC_BREAK = 'thematic_break';
AstNode.HTML_INLINE = 'html_inline';
AstNode.HTML_BLOCK = 'html_block';
AstNode.CUSTOM_INLINE = 'custom_inline';
AstNode.CUSTOM_BLOCK = 'custom_block';

// mkdoc extensions
AstNode.EOF = 'eof';

AstNode.types = [
  AstNode.DOCUMENT,
  AstNode.SOFTBREAK,
  AstNode.LINEBREAK,
  AstNode.LIST,
  AstNode.ITEM,
  AstNode.PARAGRAPH,
  AstNode.TEXT,
  AstNode.HEADING,
  AstNode.EMPH,
  AstNode.STRONG,
  AstNode.LINK,
  AstNode.IMAGE,
  AstNode.CODE,
  AstNode.CODE_BLOCK,
  AstNode.BLOCK_QUOTE,
  AstNode.THEMATIC_BREAK,
  AstNode.HTML_INLINE,
  AstNode.HTML_BLOCK,
  AstNode.CUSTOM_INLINE,
  AstNode.CUSTOM_BLOCK
];

AstNode.extensions = [
  AstNode.EOF
];

/**
 *  Converts a deserialized object to an AST node.
 *
 *  @function deserialize
 *  @param {Object} node serialized ast object.
 *
 *  @return {Node} an AST node.
 */
function deserialize(node) {

  var n = new Node(node.type, node.sourcepos)
    , next = node.firstChild;

  if(node.literal) {
    n._literal = node.literal;
  }

  // document properties
  if(AstNode.is(node, AstNode.DOCUMENT)) {
    n.refmap = node.refmap; 

    if(node.file) {
      n.file = node.file; 
    }

    if(node.cmd) {
      n.cmd = node.cmd; 
    }

    if(node.linkRefs) {
      n.linkRefs = node.linkRefs; 
    }
  }

  n._lastLineBlank = node.lastLineBlank;
  n._open = node.open;

  if(node.stringContent || node.stringContent === '') {
    n._string_content = node.stringContent;
  }

  var listData = node.listData || node._listData;
  for(var k in listData) {
    n._listData[k] = listData[k];
  }

  // fenced code block info
  if(node.info) {
    n._info = node.info;
  }
  n._isFenced = node.isFenced;
  n._fenceLength = node.fenceLength;
  if(node.fenceChar) {
    n._fenceChar = node.fenceChar; 
  }

  if(node.fenceOffset !== undefined) {
    n._fenceOffset = node.fenceOffset; 
  }

  // heading
  if(node.level) {
    n._level = node.level;
  }

  // links
  if(node.linkType) {
    n._linkType = node.linkType;
  }
  if(node.destination) {
    n._destination = node.destination;
  }
  if(node.title || node.title === '') {
    n._title = node.title;
  }

  // custom
  if(node.onEnter) {
    n._onEnter = node.onEnter; 
  }
  if(node.onExit) {
    n._onExit = node.onExit; 
  }

  // html
  if(node.htmlBlockType) {
    n._htmlBlockType = node.htmlBlockType; 
  }

  // iterate children
  while(next) {
    n.appendChild(deserialize(next));
    next = next.next; 
  }

  return n;
}

/**
 *  Converts an AST node to an object that may be serialized without any 
 *  circular references.
 *
 *  This implementation maintains the `firstChild` and `next` properties so 
 *  that the tree structure may be re-created, but ensures that circular 
 *  references such as `parent` are not included; in addition `listData` is 
 *  handled to avoid circular references.
 *
 *  Property names are stripped of leading underscores when serializing for 
 *  better legibility of the serialized nodes.
 *
 *  It makes a best effort to avoid serializing unnecessary data such as `null` 
 *  values.
 *
 *  Default values are avoided where possible unless the `defaults` option is 
 *  given. Default values are those that match the value for a property 
 *  immediately after a Node is created, ie: the Node constructor sets a value.
 *
 *  This helps to keep the serialized data as lean as possible.
 *
 *  @static {function} serialize
 *  @param {Object} node the AST node.
 *  @param {Boolean} defaults include default values.
 *
 *  @return {Object} a serialized object.
 */
function serialize(node, defaults) {
  if(!(node instanceof Node)) {
    return node;
  }

  var obj = {}
    , k;

  obj.type = node._type;
  if(node._sourcepos) {
    obj.sourcepos = node._sourcepos;
  }
  if(node._literal) {
    obj.literal = node._literal;
  }

  // document properties
  if(AstNode.is(node, AstNode.DOCUMENT)) {
    obj.refmap = node.refmap; 

    if(node.file) {
      obj.file = node.file; 
    }

    if(node.cmd) {
      obj.cmd = node.cmd; 
    }

    if(node.linkRefs) {
      obj.linkRefs = node.linkRefs; 
    }
  }

  // NOTE: do not serialize default value: false
  if(defaults || node._lastLineBlank !== false) {
    obj.lastLineBlank = node._lastLineBlank;
  }

  // NOTE: do not serialize default value: true
  if(defaults || node._open !== true) {
    obj.open = node._open;
  }

  if(node._string_content || node._string_content === '') {
    obj.stringContent = node._string_content;
  }

  for(k in node._listData) {
    if(!obj.listData) {
      obj.listData = {}; 
    } 
    obj.listData[k] = node._listData[k];
  }

  // fenced code block info
  if(node._info) {
    obj.info = node._info;
  }

  // NOTE: do not serialize default value: false
  if(defaults || node._isFenced !== false) {
    obj.isFenced = node._isFenced;
  }
  // NOTE: do not serialize default value: 0
  if(defaults || node._fenceLength) {
    obj.fenceLength = node._fenceLength;
  }

  if(node._fenceChar) {
    obj.fenceChar = node._fenceChar; 
  }
  if(node._fenceOffset !== null) {
    obj.fenceOffset = node._fenceOffset; 
  }

  // heading
  if(node._level) {
    obj.level = node._level;
  }

  // links
  if(node._linkType) {
    obj.linkType = node._linkType;
  }
  if(node._destination) {
    obj.destination = node._destination;
  }
  if(node._title || node.title === '') {
    obj.title = node._title;
  }

  // custom
  if(node._onEnter) {
    obj.onEnter = node._onEnter; 
  }
  if(node._onExit) {
    obj.onExit = node._onExit; 
  }

  // html
  if(node._htmlBlockType) {
    obj.htmlBlockType = node._htmlBlockType; 
  }

  if(node._firstChild) {
    obj.firstChild = serialize(node._firstChild, defaults);
  }

  if(node._next) {
    obj.next = serialize(node._next, defaults);
  }

  return obj;
}

AstNode.serialize = serialize;
AstNode.deserialize = deserialize;

AstNode.is = is;
AstNode.createDocument = createDocument;
AstNode.createNode = createNode;
AstNode.createDocumentFragment = createDocumentFragment;

module.exports = AstNode;
