# Contents Index

<? @include readme/badges.md ?>

> Generate a table of contents index

Creates a list representing the structure of a document as determined by the headings in the document.

To inject the created list into a location in the document place the marker `<!-- @toc -->` in the source document.

By default it creates anchor links (`#`) to named anchors on the same page but the link behaviour may be disabled or customized using a `destination` function, see the [api docs](#api).

<? @include {=readme} install.md ?>

***
<!-- @toc -->
***

<? @include {=readme} usage.md example.md help.md ?>

<? @exec mkapi index.js toc.js --title=API --level=2 ?>
<? @include {=readme} license.md links.md ?>
