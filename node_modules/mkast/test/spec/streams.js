var expect = require('chai').expect
  , cmark = require('commonmark')
  , Parser = cmark.Parser
  , Renderer = cmark.XmlRenderer
  , ast = require('../../index')
  , Walk = require('../../lib/walk');

describe('streams:', function() {

  it('should return stream with no input', function(done) {
    expect(ast.deserialize()).to.be.an('object');
    done();
  });

  it('should serialize and deserialize list w/ callback', function(done) {
    var parser = new Parser()
      , buffer = parser.parse('* foo\n* bar\n')
      , expected = (new Renderer()).render(buffer);

    function complete(err, doc) {
      expect(doc).to.be.an('object');
      expect((new Renderer()).render(doc)).to.eql(expected);
      done(); 
    }

    ast.deserialize(ast.serialize(buffer), complete);
  });

  it('should serialize ast w/ callback', function(done) {
    var parser = new Parser()
      , buffer = parser.parse('# Title\n<? @include file.md ?>');
    ast.serialize(buffer, done);
  });

  it('should serialize ast and parse result lines w/ callback',
    function(done) {
      var parser = new Parser()
        , buffer = parser.parse('# Title\n<? @include file.md ?>');
      ast.parser(ast.serialize(buffer), done);
    }
  );

  it('should serialize ast and parse result lines w/ listener',
    function(done) {
      var parser = new Parser()
        , buffer = parser.parse('# Title\n<? @include file.md ?>');
      var stream = ast.parser(ast.serialize(buffer));
      stream.once('finish', done);
    }
  );

  it('should serialize and deserialize ast w/ callback', function(done) {
    var parser = new Parser()
      , buffer = parser.parse('# Title\n<? @include file.md ?>')
      , expected = (new Renderer()).render(buffer);

    function complete(err, doc) {
      expect(doc).to.be.an('object');
      expect((new Renderer()).render(doc)).to.eql(expected);
      done(); 
    }

    ast.deserialize(ast.serialize(buffer), complete);
  });

  it('should serialize and deserialize ast w/ listener', function(done) {
    var parser = new Parser()
      , buffer = parser.parse('# Title\n<? @include file.md ?>')
      , expected = (new Renderer()).render(buffer)
      , deserializer = ast.deserialize(ast.serialize(buffer));

    function complete(doc) {
      expect(doc).to.be.an('object');
      expect((new Renderer()).render(doc)).to.eql(expected);
      done(); 
    }

    deserializer.once('eof', complete);
  });

  it('should skip non-document on walk', function(done) {
    var walker = new Walk();
    walker.once('finish', done);
    walker.end({_type: 'foo'});
  });

});
