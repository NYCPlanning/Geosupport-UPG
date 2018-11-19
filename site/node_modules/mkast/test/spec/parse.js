var expect = require('chai').expect
  , ast = require('../../index')
  , Node = require('../../lib/node');

describe('parse:', function() {

  it('should return ast from parse()', function(done) {
    var doc = ast.parse('Text.')
    expect(doc).to.be.an('object');
    expect(doc.type).to.eql(Node.DOCUMENT);
    done();
  });

});
