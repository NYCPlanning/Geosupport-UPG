var expect = require('chai').expect
  , ast = require('../../index')
  , Node = ast.Node
  , stringify = require('../../lib/stringify');

describe('stringify:', function() {

  it('should convert node to json', function(done) {
    var doc = ast.parse('> Quotation')
      , str = stringify(doc);
    expect(JSON.parse(str)).to.eql(Node.serialize(doc));
    done();
  });

});
