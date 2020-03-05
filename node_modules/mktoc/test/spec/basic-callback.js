var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should create toc for basic headings w/ callback', function(done) {
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
          standalone: true
        };
    
    function onFinish() {
      var result = utils.result(target);
      expect(result[0].type).to.eql(Node.DOCUMENT);
      expect(result[1].type).to.eql(Node.LIST);
      expect(result[2].type).to.eql(Node.EOF);
      done();
    }

    mktoc(opts, onFinish);
  });

});
