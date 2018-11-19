var expect = require('chai').expect
  , ParserStream = require('../../lib/parser');

describe('parser stream:', function() {

  it('should error on bad json', function(done) {
    var parser = new ParserStream();
    parser.once('error', function(err) {
      function fn() {
        throw err;
      }
      expect(fn).throws(Error);
      done(); 
    });
    parser.end(new Buffer('{'));
  });

});
