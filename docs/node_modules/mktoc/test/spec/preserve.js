var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should preserve existing links in headings', function(done) {
    var source = 'test/fixtures/preserve.md'
      , target = 'target/preserve.json.log'
      , data = ast.parse('' + fs.readFileSync(source))

    // mock file for correct relative path
    // mkcat normally injects this info
    data.file = source;

    var input = ast.serialize(data)
      , output = fs.createWriteStream(target)
      , opts = {
          input: input,
          output: output,
          standalone: true
        };
    
    mktoc(opts);

    output.once('finish', function() {
      var result = utils.result(target);

      //console.dir(result)

      // open document
      expect(result[0].type).to.eql(Node.DOCUMENT);

      // list data
      expect(result[1].type).to.eql(Node.LIST);
      expect(result[1].lastLineBlank).to.eql(true);

      var h1 = result[1].firstChild
        , h1Link = h1.firstChild
        , h1Text = h1Link.firstChild;

      expect(h1.type).to.eql(Node.ITEM);
      expect(h1Link.type).to.eql(Node.LINK);
      expect(h1Link.destination).to.eql('/installation');
      expect(h1Text.literal).to.eql('Install')

      var h2 = h1Link.next
        , h2Item = h2.firstChild
        , h2Link = h2Item.firstChild
        , h2Text = h2Link.firstChild;

      expect(h2.type).to.eql(Node.LIST);
      expect(h2Item.type).to.eql(Node.ITEM);
      expect(h2Link.type).to.eql(Node.LINK);
      expect(h2Link.destination).to.eql('#options');
      expect(h2Text.literal).to.eql('Options');

      // eof
      expect(result[2].type).to.eql(Node.EOF);

      done();
    })
  });

});
