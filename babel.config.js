const t = require('@babel/types');

const createProcessEnv = () => t.memberExpression(t.identifier('process'), t.identifier('env'));

const isImportMeta = (objectPath) =>
  typeof objectPath.isMetaProperty === 'function' &&
  objectPath.isMetaProperty() &&
  objectPath.get('meta').isIdentifier({ name: 'import' }) &&
  objectPath.get('property').isIdentifier({ name: 'meta' });

const isEnvProperty = (path) => {
  const propertyPath = path.get('property');

  if (path.node.computed) {
    return (
      propertyPath.isStringLiteral({ value: 'env' }) ||
      propertyPath.isIdentifier({ name: 'env' })
    );
  }

  return propertyPath.isIdentifier({ name: 'env' });
};

const isImportMetaEnv = (path) => {
  const objectPath = path.get('object');
  return isImportMeta(objectPath) && isEnvProperty(path);
};

const replaceImportMetaEnv = () => ({
  name: 'replace-import-meta-env',
  visitor: {
    MemberExpression(path) {
      if (isImportMetaEnv(path)) {
        path.replaceWith(createProcessEnv());
      }
    },
    OptionalMemberExpression(path) {
      if (isImportMetaEnv(path)) {
        path.replaceWith(createProcessEnv());
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
