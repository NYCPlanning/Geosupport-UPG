var Node = require('./node');

/**
 *  Convert a commonmark node to JSON removing circular references but 
 *  maintaining the ability to re-create the tree.
 *
 *  @function stringify
 *  @param {Object} node the node to stringify.
 *  @param {Number} indent number of spaces to indent JSON.
 *
 *  @returns {String} serialized JSON.
 */
function stringify(node, indent) {
  return JSON.stringify(Node.serialize(node), undefined, indent);
}

module.exports = stringify;
