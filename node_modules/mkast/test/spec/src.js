var expect = require('chai').expect
  , ast = require('../../index')
  , Walk = require('../../lib/walk');

describe('source:', function() {

  it('should return stream from src()', function(done) {
    expect(ast.src('Text.')).to.be.instanceof(Walk);
    done();
  });

});
