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
