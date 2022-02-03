var ast = require('mkast')
  , Toc = require('./toc');

/**
 *  Generate a document containing a table of contents list.
 *
 *  See [Toc](#toc-1) for more available options.
 *
 *  @function toc
 *  @param {Object} [opts] processing options.
 *  @param {Function} [cb] callback function.
 *
 *  @option {Readable} [input] input stream.
 *  @option {Writable} [output] output stream.
 *
 *  @returns an output stream.
 */
function toc(opts, cb) {

  opts = opts || {};
  opts.input = opts.input;
  opts.output = opts.output;

  var stream = new Toc(opts);

  if(!opts.input || !opts.output) {
    return stream; 
  }

  // pass through stream, we append or prepend
  ast.parser(opts.input)
    .pipe(stream)
    .pipe(ast.stringify())
    .pipe(opts.output);

  if(cb) {
    opts.output
      .once('error', cb)
      .once('finish', cb);
  }

  return opts.output;
}

module.exports = toc;
