# Tree

[![Build Status](https://travis-ci.org/mkdoc/mkast.svg?v=3)](https://travis-ci.org/mkdoc/mkast)
[![npm version](http://img.shields.io/npm/v/mkast.svg?v=3)](https://npmjs.org/package/mkast)
[![Coverage Status](https://coveralls.io/repos/mkdoc/mkast/badge.svg?branch=master&service=github&v=3)](https://coveralls.io/github/mkdoc/mkast?branch=master)

> Converts nodes to and from JSON

Transforms [commonmark][] nodes to and from JSON for piping between processes.

## Install

```
npm i mkast
```

---

- [Install](#install)
- [Usage](#usage)
- [API](#api)
  - [parser](#parser)
  - [deserialize](#deserialize)
  - [serialize](#serialize)
- [License](#license)

---

## Usage

Serialize [commonmark][] nodes to line-delimited JSON:

```javascript
var mkast = require('mkast')
  , ast = mkast.parse('# Title\n<? @include file.md ?>');
mkast.serialize(ast).pipe(process.stdout);
```

For more information see the [api docs](#api).

## API

### parser

```javascript
parser(stream[, cb])
```

Parse line-delimited JSON to vanilla objects.

When a callback function is given it is added as a listener for
the `error` and `finish` events on the parser stream.

Returns the parser stream.

* `stream` Object input stream.
* `cb` Function callback function.

### deserialize

```javascript
deserialize([stream][, cb])
```

Deserialize line-delimited JSON to commonmark nodes.

When a callback function is given it is added as a listener for
the `error` and `eof` events on the deserializer stream.

The `eof` event can fire multiple times so the callback may be called
multiple times.

Returns the deserializer stream.

* `stream` Object input stream.
* `cb` Function callback function.

### serialize

```javascript
serialize(node[, opts][, cb])
```

Serialize a commonmark AST node to line-delimited JSON.

When the node is of the `document` type it's direct descendants are
detached from the document and streamed as independent lines. So that
consumers of the stream will know when the document ends a node
with an `eof` type is sent to indicate the end of file (EOF).

When injecting documents into a stream it may be desirable to disable
this behaviour, to do so use:

```javascript
{eof: false}
```

When a callback function is given it is added as a listener for
the `error` and `finish` events on the serializer stream.

Returns the serializer stream.

* `node` Object input AST node.
* `opts` Object processing options.
* `cb` Function callback function.

## License

MIT

---

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on April 2, 2016

[mkdoc]: https://github.com/mkdoc/mkdoc
[commonmark]: http://commonmark.org
[jshint]: http://jshint.com
[jscs]: http://jscs.info

