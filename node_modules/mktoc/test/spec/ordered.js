var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should create toc for basic headings', function(done) {
    var source = 'test/fixtures/basic.md'
      , target = 'target/basic.json.log'
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
          type: 'ordered',
          delimiter: '.'
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

      expect(result[1].listData).to.be.an('object');
      expect(result[1].listData.tight).to.eql(true);
      expect(result[1].listData.padding).to.eql(2);
      expect(result[1].listData.delimiter).to.eql(opts.delimiter);

      // eof
      expect(result[2].type).to.eql(Node.EOF);

      done();
    })
  });

});
