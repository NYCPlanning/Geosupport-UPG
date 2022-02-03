function detach(node) {
  delete node._firstChild;
  delete node._lastChild;
  delete node._next;
  delete node._prev;
  delete node._parent;
}

module.exports = detach;
