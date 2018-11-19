var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should preserve inline elements when link disabled', function(done) {
    var source = 'test/fixtures/disabled.md'
      , target = 'target/disabled.json.log'
      , data = ast.parse('' + fs.readFileSync(source))

    // mock file for correct relative path
    // mkcat normally injects this info
    data.file = source;

    var input = ast.serialize(data)
      , output = fs.createWriteStream(target)
      , opts = {
          input: input,
          output: output,
          standalone: true,
          link: false
        };
    
    mktoc(opts);

    output.once('finish', function() {
      var result = utils.result(target);

      // open document
      expect(result[0].type).to.eql(Node.DOCUMENT);

      // list data
      expect(result[1].type).to.eql(Node.LIST);
      expect(result[1].lastLineBlank).to.eql(true);

      var h1 = result[1].firstChild
        , h1Para = h1.firstChild
        , h1Emph = h1Para.firstChild
        // skip the space character text node
        , h1Strong = h1Emph.next.next;

      expect(h1.type).to.eql(Node.ITEM);
      expect(h1Para.type).to.eql(Node.PARAGRAPH);
      expect(h1Emph.type).to.eql(Node.EMPH);
      expect(h1Strong.type).to.eql(Node.STRONG);
      expect(h1Emph.firstChild.literal).to.eql('Heading');
      expect(h1Strong.firstChild.literal).to.eql('1');

      // eof
      expect(result[2].type).to.eql(Node.EOF);

      done();
    })
  });

});
