var expect = require('chai').expect
  , ast = require('../../index')
  , Node = ast.Node;

describe('streams:', function() {

  it('should inherit children of nested documents', function(done) {
    var buffer = ast.parse(
          '# Title\n\nParagraph with a [link](http://example.com)');

    // not easy to assert on this, but triggers a code path
    // whereby child documents are expanded into the containing owner
    // document
    function complete() {
      done(); 
    }

    var serializer = ast.serialize()
      , deserializer = ast.deserialize();

    expect(serializer).to.be.an('object');
    expect(deserializer).to.be.an('object');

    deserializer.once('finish', complete);

    serializer.write(Node.createNode(Node.DOCUMENT));
    serializer.write(buffer);
    serializer.write(Node.createNode(Node.EOF));
    serializer.end();

    serializer.pipe(deserializer);
  });

  it('should create document fragment from non-document node', function(done) {
    var buffer = ast.parse(
          '# Title\n\nParagraph with a [link](http://example.com)');

    // not easy to assert on this, but triggers a code path
    // whereby child documents are expanded into the containing owner
    // document
    function complete() {
      done(); 
    }

    var serializer = ast.serialize()
      , deserializer = ast.deserialize();

    expect(serializer).to.be.an('object');
    expect(deserializer).to.be.an('object');

    deserializer.once('finish', complete);

    serializer.write(Node.createNode(Node.DOCUMENT));
    serializer.write(Node.createNode(Node.EOF));
    // writing a non-document after the EOF
    // gets wrapped in a document fragment
    serializer.write(buffer.firstChild);
    serializer.end();

    serializer.pipe(deserializer);
  });

  it('should not wrap EOF in document fragment', function(done) {
    // not easy to assert on this, but triggers a code path
    function complete() {
      done(); 
    }

    var serializer = ast.serialize()
      , deserializer = ast.deserialize();

    expect(serializer).to.be.an('object');
    expect(deserializer).to.be.an('object');

    deserializer.once('finish', complete);

    serializer.write(Node.createNode(Node.DOCUMENT));
    serializer.write(Node.createNode(Node.EOF));
    // writing an EOF after the EOF
    // gets dropped
    serializer.write(Node.createNode(Node.EOF));
    serializer.end();

    serializer.pipe(deserializer);
  });

});
