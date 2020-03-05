var toc = require('../index')
  , ast = require('mkast');
ast.src('# Heading\n\n## Sub Heading\n\n')
  .pipe(toc())
  .pipe(ast.stringify({indent: 2}))
  .pipe(process.stdout);
