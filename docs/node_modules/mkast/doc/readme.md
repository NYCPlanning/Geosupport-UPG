# Tree

<? @include readme/badges.md ?>

> Converts nodes to and from JSON

Transforms [commonmark][] nodes to and from JSON for piping between processes.

<? @include {=readme} install.md ?>

***
<!-- @toc -->
***

## Usage

Serialize [commonmark][] nodes to line-delimited JSON:

<? @source {javascript=s/\.\.\/index/mkast/gm} usage.js ?>

For more information see the [api docs](#api).

<? @exec mkapi index.js --title=API --level=2 ?>
<? @include {=readme} license.md links.md ?>
