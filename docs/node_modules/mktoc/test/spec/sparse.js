var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should handle sparse headings', function(done) {
    var source = 'test/fixtures/sparse.md'
      , target = 'target/sparse.json.log'
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

      //console.dir(result)

      // open document
      expect(result[0].type).to.eql(Node.DOCUMENT);

      // heading for title
      expect(result[1].type).to.eql(Node.LIST);

      var Top = result[1].firstChild.firstChild
        , Deep = Top.next
      //console.error(Deep);
      expect(Top.firstChild.literal).to.eql('Top')
      expect(Deep.firstChild.firstChild.firstChild.literal).to.eql('Deep');

      // eof
      expect(result[2].type).to.eql(Node.EOF);

      done();
    })
  });

});
