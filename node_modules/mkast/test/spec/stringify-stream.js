var expect = require('chai').expect
  , ast = require('../../index')
  , Serialize = require('../../lib/serialize');

describe('stringify stream:', function() {

  it('should return stream from stringify()', function(done) {
    expect(ast.stringify()).to.be.instanceof(Serialize);
    done();
  });

});
