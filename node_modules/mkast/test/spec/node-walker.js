var expect = require('chai').expect
  , ast = require('../..')
  , Node = ast.Node
  , NodeWalker = ast.NodeWalker
  , walk = NodeWalker.walk
  , collect = NodeWalker.collect;

describe('node walker:', function() {

  it('should walk all child nodes', function(done) {
    var doc = ast.parse('> Quotation')
      , expected = [Node.BLOCK_QUOTE, Node.PARAGRAPH, Node.TEXT]
      , types = [];

    function iterator(node) {
      types.push(node.type);
    }

    walk(doc, iterator);

    expect(types).to.eql(expected);
    done();
  });

  it('should collect given nodes of a type', function(done) {
    var doc = ast.parse('> Quotation');
    var text = collect(doc, Node.DOCUMENT);
    expect(text.length).to.eql(1);
    expect(text[0].type).to.eql(Node.DOCUMENT);
    done();
  });

  it('should collect nodes of a child type', function(done) {
    var doc = ast.parse('> Quotation');
    var text = collect(doc, Node.TEXT);
    expect(text.length).to.eql(1);
    expect(text[0].type).to.eql(Node.TEXT);
    done();
  });

  it('should collect nodes of a type with array list', function(done) {
    var doc = ast.parse('> Quotation');
    var text = collect([doc], Node.TEXT);
    expect(text.length).to.eql(1);
    expect(text[0].type).to.eql(Node.TEXT);
    done();
  });

});
