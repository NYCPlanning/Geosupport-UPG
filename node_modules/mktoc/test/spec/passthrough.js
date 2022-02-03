var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should pass through input data', function(done) {
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
          output: output
        };
    
    mktoc(opts);

    output.once('finish', function() {
      var result = utils.result(target);

      // open document
      expect(result[0].type).to.eql(Node.DOCUMENT);

      // input headings
      expect(result[1].type).to.eql(Node.HEADING);
      expect(result[2].type).to.eql(Node.HEADING);
      expect(result[3].type).to.eql(Node.HEADING);
      expect(result[4].type).to.eql(Node.HEADING);
      expect(result[5].type).to.eql(Node.HEADING);
      expect(result[6].type).to.eql(Node.HEADING);

      // eof for input document
      expect(result[7].type).to.eql(Node.EOF);

      // open toc document
      expect(result[8].type).to.eql(Node.DOCUMENT);
      expect(result[9].type).to.eql(Node.LIST);

      // eof for toc document
      expect(result[10].type).to.eql(Node.EOF);

      done();
    })
  });

});
