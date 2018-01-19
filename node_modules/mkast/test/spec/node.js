var expect = require('chai').expect
  , Node = require('../../lib/node');

describe('node:', function() {

  it('should return is of type (type)', function(done) {
    var node = Node.createDocument();
    expect(Node.is(node, Node.DOCUMENT)).to.eql(true);
    done();
  });

  it('should create default document with no arguments', function(done) {
    var node = Node.createDocument();
    expect(node.type).to.eql(Node.DOCUMENT);
    done();
  });

  it('should create document with sourcepos', function(done) {
    var pos = [[1,1],[0,0]];
    var node = Node.createDocument(pos);
    expect(node.sourcepos).to.eql(pos);
    done();
  });

  it('should create document with sourcepos and attrs', function(done) {
    var pos = [[1,1],[0,0]]
      , file = 'foo.md';
    var node = Node.createDocument(pos, {file: file});
    expect(node.sourcepos).to.eql(pos);
    expect(node.file).to.eql(file);
    done();
  });

  it('should create document with attrs and sourcepos', function(done) {
    var pos = [[1,1],[0,0]]
      , file = 'foo.md';
    var node = Node.createDocument({file: file}, pos);
    expect(node.sourcepos).to.eql(pos);
    expect(node.file).to.eql(file);
    done();
  });

  it('should create node with sourcepos', function(done) {
    var pos = [[1,1],[0,0]];
    var node = Node.createNode(Node.TEXT, pos);
    expect(node.sourcepos).to.eql(pos);
    done();
  });

});
