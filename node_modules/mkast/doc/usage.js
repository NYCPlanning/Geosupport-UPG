var mkast = require('../index')
  , ast = mkast.parse('# Title\n<? @include file.md ?>');
mkast.serialize(ast).pipe(process.stdout);
