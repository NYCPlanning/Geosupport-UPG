var expect = require('chai').expect
  , ast = require('../../index')
  , Node = require('../../lib/node');

describe('deserialize:', function() {

  it('should deserialize file property', function(done) {
    var doc = ast.parse('Text')
      , expected = 'README.md'
      , obj
      , res;

    doc.file = expected;
    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(res.file).to.eql(expected);

    expect(doc).to.eql(res);
    done();
  });

  it('should deserialize cmd property', function(done) {
    var doc = ast.parse('Text')
      , expected = 'pwd'
      , obj
      , res;

    doc.cmd = expected;
    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(res.cmd).to.eql(expected);

    expect(doc).to.eql(res);
    done();
  });

  it('should deserialize linkRefs property', function(done) {
    var doc = ast.parse('Text')
      , expected = true
      , obj
      , res;

    doc.linkRefs = expected;
    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(res.linkRefs).to.eql(expected);

    expect(doc).to.eql(res);

    done();
  });


  it('should deserialize onEnter and onExit', function(done) {
    var doc = ast.parse('Text')
      , enter = 'enter'
      , exit = 'exit'
      , obj
      , res;

    doc._onEnter = enter;
    doc._onExit = exit;
    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(res.onEnter).to.eql(enter);
    expect(res.onExit).to.eql(exit);

    expect(doc).to.eql(res);

    done();
  });


  it('should deserialize link references', function(done) {
    var doc = ast.parse('[example]: http://example.com "Example Website"')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(res.refmap).to.be.an('object');
    expect(res.refmap.example).to.be.an('object');
    expect(res.refmap.example.destination).to.eql('http://example.com');
    expect(res.refmap.example.title).to.eql('Example Website');

    expect(doc).to.eql(res);

    done();
  });

  it('should deserialize heading', function(done) {
    var doc = ast.parse('# Heading')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.HEADING)).to.eql(true);
    expect(Node.is(res.firstChild.firstChild, Node.TEXT)).to.eql(true);
    expect(res.firstChild.firstChild.literal).to.eql('Heading');

    expect(doc).to.eql(res);

    done();
  });

  it('should deserialize paragraph', function(done) {
    var doc = ast.parse('Paragraph\n\n')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.PARAGRAPH)).to.eql(true);
    expect(Node.is(res.firstChild.firstChild, Node.TEXT)).to.eql(true);
    expect(res.firstChild.firstChild.literal).to.eql('Paragraph');

    expect(doc).to.eql(res);

    done();
  });

  it('should deserialize html block', function(done) {
    var doc = ast.parse('<? @pi ?>')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.HTML_BLOCK)).to.eql(true);
    expect(res.firstChild.literal).to.eql('<? @pi ?>');

    expect(doc).to.eql(res);

    done();
  });


  it('should deserialize blockquote', function(done) {
    var doc = ast.parse('> Quotation\n\n')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.BLOCK_QUOTE)).to.eql(true);
    expect(Node.is(res.firstChild.firstChild, Node.PARAGRAPH)).to.eql(true);
    expect(res.firstChild.firstChild.firstChild.literal).to.eql('Quotation');

    expect(doc).to.eql(res);

    done();
  });

  it('should deserialize thematic break', function(done) {
    var doc = ast.parse('Foo\n\n---\n\n')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.PARAGRAPH)).to.eql(true);
    expect(Node.is(res.firstChild.next, Node.THEMATIC_BREAK)).to.eql(true);

    expect(doc).to.eql(res);

    done();
  });

  it('should deserialize inlines', function(done) {
    var doc = ast.parse('`code`*emph***strong**')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.PARAGRAPH)).to.eql(true);
    expect(Node.is(res.firstChild.firstChild, Node.CODE)).to.eql(true);
    expect(Node.is(res.firstChild.firstChild.next, Node.EMPH)).to.eql(true);
    expect(Node.is(res.firstChild.firstChild.next.next, Node.STRONG))
      .to.eql(true);

    expect(doc).to.eql(res);

    done();
  });


  it('should deserialize code block', function(done) {
    var doc = ast.parse('```javascript\nvar foo="bar";\n```')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.CODE_BLOCK)).to.eql(true);
    expect(res.firstChild.literal).to.eql('var foo="bar";\n');

    expect(doc).to.eql(res);

    done();
  });

  it('should deserialize link', function(done) {
    var doc = ast.parse('[example](http://example.com "Example Website")')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(obj).to.be.an('object');
    expect(Node.is(obj, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(obj.firstChild, Node.PARAGRAPH)).to.eql(true);
    expect(Node.is(obj.firstChild.firstChild, Node.LINK)).to.eql(true);
    expect(obj.firstChild.firstChild.destination).to.eql('http://example.com');
    expect(obj.firstChild.firstChild.title).to.eql('Example Website');
    expect(Node.is(obj.firstChild.firstChild.firstChild, Node.TEXT))
      .to.eql(true);
    expect(obj.firstChild.firstChild.firstChild.literal).to.eql('example');

    expect(doc).to.eql(res);

    done();
  });

  it('should deserialize link with _linkType', function(done) {
    var doc = ast.parse('[example](http://example.com)')
      , obj
      , res;

    expect(doc).to.be.an('object');
    doc.firstChild.firstChild._linkType = 'ref';

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.PARAGRAPH)).to.eql(true);
    expect(Node.is(res.firstChild.firstChild, Node.LINK)).to.eql(true);
    expect(res.firstChild.firstChild._linkType).to.eql('ref');

    expect(doc).to.eql(res);

    done();
  });

  it('should deserialize list', function(done) {
    var doc = ast.parse('* foo\n* bar\n')
      , obj
      , res;

    obj = Node.serialize(doc, true);
    res = Node.deserialize(obj);

    expect(doc).to.be.an('object');
    expect(res).to.be.an('object');
    expect(Node.is(res, Node.DOCUMENT)).to.eql(true);
    expect(Node.is(res.firstChild, Node.LIST)).to.eql(true);
    expect(Node.is(res.firstChild.firstChild, Node.ITEM)).to.eql(true);

    // NOTE: list item has paragraph
    expect(
      res.firstChild.firstChild.firstChild.firstChild.literal).to.eql('foo');
    // NOTE: list item has paragraph
    expect(
        res.firstChild.firstChild.next.firstChild.firstChild.literal
      ).to.eql('bar');

    expect(doc).to.eql(res);

    done();
  });

});
