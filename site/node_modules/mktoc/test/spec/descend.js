var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should descend to parent lists', function(done) {
    var source = 'test/fixtures/descend.md'
      , target = 'target/descend.json.log'
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

      //console.error(result)

      // open document
      expect(result[0].type).to.eql(Node.DOCUMENT);

      // list data: two lists because two h1 elements
      expect(result[1].type).to.eql(Node.LIST);
      expect(result[1].lastLineBlank).to.eql(undefined);

      expect(result[2].type).to.eql(Node.LIST);
      expect(result[2].lastLineBlank).to.eql(true);
      expect(result[2].firstChild.firstChild.firstChild.literal)
        .to.eql('6');

      // eof
      expect(result[3].type).to.eql(Node.EOF);

      done();
    })
  });

});
