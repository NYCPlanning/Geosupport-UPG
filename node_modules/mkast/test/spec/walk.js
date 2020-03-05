var expect = require('chai').expect
  , ast = require('../../index')
  , Walk = require('../../lib/walk');

describe('walk:', function() {

  it('should return stream from walk()', function(done) {
    expect(ast.walk()).to.be.instanceof(Walk);
    done();
  });


  it('should walk() with eof false', function(done) {
    var walker = ast.walk({eof: false});
    walker.once('finish', done);
    walker.end(ast.parse('Text'));
  });


});
