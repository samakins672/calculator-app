const t = require('@babel/types');

const replaceImportMetaEnv = () => ({
  name: 'replace-import-meta-env',
  visitor: {
    MemberExpression(path) {
      if (
        path.get('object').matchesPattern('import.meta') &&
        path.get('property').isIdentifier({ name: 'env' })
      ) {
        path.replaceWith(t.memberExpression(t.identifier('process'), t.identifier('env')));
      }
    },
    OptionalMemberExpression(path) {
      if (
        path.get('object').matchesPattern('import.meta') &&
        path.get('property').isIdentifier({ name: 'env' })
      ) {
        path.replaceWith(t.memberExpression(t.identifier('process'), t.identifier('env')));
      }
    },
  },
});

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [replaceImportMetaEnv],
  };
};
