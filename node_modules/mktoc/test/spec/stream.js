var expect = require('chai').expect
  , mktoc = require('../../index');

describe('mktoc:', function() {

  it('should return stream with no options', function(done) {
    var stream = mktoc();
    expect(stream).to.be.an('object');
    done();
  });

  it('should return stream with options', function(done) {
    var opts = {
        type: 'ordered',
        link: false,
        depth: 2,
        max: 3,
        destination: function() {},
        prefix: '/',
        base: 'http://example.com',
        bullet: '*',
        delimiter: '.'
      }
      , stream = mktoc(opts);
    expect(stream).to.be.an('object');
    done();
  });

});
