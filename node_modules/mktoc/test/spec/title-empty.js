var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should prepend title to toc without headings', function(done) {
    var source = 'test/fixtures/marker-empty.md'
      , target = 'target/marker-empty.json.log'
      , data = ast.parse('' + fs.readFileSync(source))

    // mock file for correct relative path
    // mkcat normally injects this info
    data.file = source;

    var input = ast.serialize(data)
      , output = fs.createWriteStream(target)
      , opts = {
          input: input,
          output: output,
          title: 'Table of Contents'
        };
    
    mktoc(opts);

    output.once('finish', function() {
      var result = utils.result(target);

      //console.dir(result)

      // open document
      expect(result[0].type).to.eql(Node.DOCUMENT);

      // heading for title
      expect(result[1].type).to.eql(Node.PARAGRAPH);
      //expect(result[1].level).to.eql(1);
      //expect(result[1].firstChild.literal).to.eql(opts.title);

      // list data
      expect(result[2].type).to.eql(Node.HEADING);
      //expect(result[2].lastLineBlank).to.eql(true);

      // eof
      expect(result[3].type).to.eql(Node.EOF);

      done();
    })
  });

});
