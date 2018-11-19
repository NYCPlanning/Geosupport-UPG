var expect = require('chai').expect
  , fs = require('fs')
  , ast = require('mkast')
  , Node = ast.Node
  , mktoc = require('../../index')
  , utils = require('../util');

describe('mktoc:', function() {

  it('should create different anchors with same heading literal', 
    function(done) {
      var source = 'test/fixtures/duplicate.md'
        , target = 'target/duplicate.json.log'
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

        // open document
        expect(result[0].type).to.eql(Node.DOCUMENT);

        // list data
        expect(result[1].type).to.eql(Node.LIST);
        expect(result[1].firstChild.type).to.eql(Node.ITEM);
        expect(result[1].firstChild.next.type).to.eql(Node.ITEM);

        expect(result[1].firstChild.firstChild.type).to.eql(Node.LINK);
        expect(result[1].firstChild.next.firstChild.type).to.eql(Node.LINK);

        expect(result[1].firstChild.firstChild.destination)
          .to.eql('#options');
        expect(result[1].firstChild.next.firstChild.destination)
          .to.eql('#options-1');
        expect(result[1].firstChild.next.next.firstChild.destination)
          .to.eql('#options-2');

        // eof
        expect(result[2].type).to.eql(Node.EOF);

        done();
      })
    }
  );

});
