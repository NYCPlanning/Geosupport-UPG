var through = require('through3')
  , LF = '\n'.charCodeAt(0);

/**
 *  Reads stream buffers and writes arrays of lines.
 *
 *  Designed to be piped to another transform stream that
 *  operates on the array of lines.
 *
 *  ## Options
 *
 *  @param encoding The encoding to use when converting buffers to strings.
 */
function Line(options) {
  options = options || {};
  this.encoding = options.encoding || 'utf8';
  this.eol = /\r?\n/;
  if(options.buffer) {
    this.body = [];
  }
  this.options = options;
}

/**
 *  Transform function.
 */
function transform(chunk, encoding, cb) {
  var lines = []
    , i = 0
    , s = 0
    , b
    , line;

  if(Array.isArray(chunk)) {
    lines = chunk;
  }else if(typeof chunk === 'string') {
    lines = chunk.split(this.eol);
  }else if(Buffer.isBuffer(chunk)) {

    if(this.buffer && this.buffer.length) {
      chunk = Buffer.concat(
        [this.buffer, chunk], this.buffer.length + chunk.length);
    }

    while((b = chunk[i]) !== undefined) {
      if(b === LF) {
        line = new Buffer(i - s);
        chunk.copy(line, 0, s, i);
        s = i + 1;
        lines.push(line.toString(this.encoding));
        this.buffer = new Buffer(chunk.length - i - 1);
        chunk.copy(this.buffer, 0, i + 1);
      } 
      i++;
    } 

    // nothing was found
    if(!line) {
      this.buffer = chunk;
    }
  }else{
    return cb(new Error('line stream accepts buffers or strings'));
  }

  // how to handle the lines
  if(this.body) {
    this.body = this.body.concat(lines);
  }else{
    this.push(lines);
    this.emit('lines', lines);
  }
  cb();
}

function flush(cb) {
  var lines = [];

  // unterminated last line, need to flush it
  if(this.buffer) {
    lines = [this.buffer.toString(this.encoding)];
    if(this.body) {
      this.body = this.body.concat(lines);
    }else{
      this.push(lines);
    }
  }
  // buffered array of all lines
  if(this.body) {
    this.push(this.body);
  }

  this.emit('lines', this.body || lines);
  this.buffer = null;
  cb();
}

module.exports = through.transform(transform, flush, {ctor: Line});
