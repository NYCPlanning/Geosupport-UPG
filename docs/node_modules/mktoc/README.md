# Contents Index

[![Build Status](https://travis-ci.org/mkdoc/mktoc.svg?v=3)](https://travis-ci.org/mkdoc/mktoc)
[![npm version](http://img.shields.io/npm/v/mktoc.svg?v=3)](https://npmjs.org/package/mktoc)
[![Coverage Status](https://coveralls.io/repos/mkdoc/mktoc/badge.svg?branch=master&service=github&v=3)](https://coveralls.io/github/mkdoc/mktoc?branch=master)

> Generate a table of contents index

Creates a list representing the structure of a document as determined by the headings in the document.

To inject the created list into a location in the document place the marker `<!-- @toc -->` in the source document.

By default it creates anchor links (`#`) to named anchors on the same page but the link behaviour may be disabled or customized using a `destination` function, see the [api docs](#api).

## Install

```
npm i mktoc --save
```

For the command line interface install [mkdoc][] globally (`npm i -g mkdoc`).

---

- [Install](#install)
- [Usage](#usage)
- [Example](#example)
- [Help](#help)
- [API](#api)
  - [toc](#toc)
  - [Toc](#toc-1)
- [License](#license)

---

## Usage

Create the stream and write a [commonmark][] document:

```javascript
var toc = require('mktoc')
  , ast = require('mkast');
ast.src('# Heading\n\n## Sub Heading\n\n')
  .pipe(toc())
  .pipe(ast.stringify({indent: 2}))
  .pipe(process.stdout);
```

## Example

Create a standalone table of contents:

```shell
mkcat README.md | mktoc -s | mkout > TOC.md
```

Inject the table of contents into a document containing the `<!-- @toc -->` marker:

```shell
mkcat readme.md | mktoc | mkout > README.md
```

Set an initial heading with the specified level:

```shell
mkcat readme.md | mktoc --title 'Table of Contents' --level 2 | mkout > README.md
```

Only include headings for levels 2-4:

```shell
mkcat readme.md | mktoc -d 2 -m 4 | mkout > README.md
```

Create an ordered list and set the delimiter:

```shell
mkcat readme.md | mktoc -o -E '.' | mkout > README.md
```

## Help

```
Usage: mktoc [options]

  Generates a table of contents index.

Options
  -t, --title=[TITLE]     Set initial heading
  -l, --level=[NUM]       Set level for initial heading
  -d, --depth=[LEVEL]     Ignore headings below LEVEL
  -m, --max=[LEVEL]       Ignore headings above LEVEL
  -p, --prefix=[VAL]      Set link destination prefix to VAL
  -b, --base=[URL]        Base URL for absolute links
  -B, --bullet=[CHAR]     Character for bullet lists
  -E, --delimiter=[CHAR]  Delimiter for ordered lists
  -D, --disable           Disable automatic links
  -o, --ordered           Create an ordered list
  -s, --standalone        Standalone index, discards input
  -h, --help              Display help and exit
  --version               Print the version and exit

mktoc@1.0.8
```

## API

### toc

```javascript
toc([opts][, cb])
```

Generate a document containing a table of contents list.

See [Toc](#toc-1) for more available options.

Returns an output stream.

* `opts` Object processing options.
* `cb` Function callback function.

#### Options

* `input` Readable input stream.
* `output` Writable output stream.

### Toc

```javascript
new Toc([opts])
```

Create a table of contents index stream.

Note that in order to build a complete index all data must be read so this
implementation buffers incoming nodes and flushes them when the stream
is ended writing the index nodes where necessary.

When the first child of a heading is a link it is preserved and no
automatic link is created, otherwise when creating links inline markup
in the heading is discarded.

If the `standalone` option is given then the incoming data is discarded
and the document representing the index is flushed.

When a `destination` function is specified it is passed a string
literal of the heading text and should return a URL, the function is
invoked in the scope of this stream.

Typically `prefix` will be either a `/`, `#` or the empty string
depending upon whether you want absolute, anchor or relative links. The
default is to use `#` for anchor links on the same page.

If the `bullet` option is given it must be one of `-`, `+` or `*`.

If the `delimiter` option is given it must a period `.` or right
parenthesis `)`.

* `opts` Object processing options.

#### Options

* `standalone` Boolean discard incoming data.
* `type` String=bullet list output type, `bullet` or `ordered`.
* `link` Boolean=true whether to create links in the output lists.
* `depth` Number=1 ignore headings below this level.
* `max` Number=6 ignore headings above this level.
* `destination` Function builds the link URLs.
* `prefix` String=# default link prefix.
* `base` String a base path for absolute links.
* `bullet` String=- character for bullet lists.
* `delimiter` String=) delimiter for ordered lists.

## License

MIT

---

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on April 18, 2016

[mkdoc]: https://github.com/mkdoc/mkdoc
[commonmark]: http://commonmark.org
[jshint]: http://jshint.com
[jscs]: http://jscs.info

