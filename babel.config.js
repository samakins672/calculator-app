module.exports = function(api) {
  api.cache(true);

  // Inline Babel plugin to replace `import.meta.env` with `process.env`.
  // This avoids emitting `import.meta` syntax into bundles which causes
  // "Cannot use 'import.meta' outside a module" when the runtime isn't ESM.
  const replaceImportMetaEnv = function({ types: t }) {
    return {
      name: 'replace-import-meta-env',
      visitor: {
        MemberExpression(path) {
          const obj = path.node.object;

          // Match `import.meta.env` exactly
          if (
            t.isMetaProperty(obj) &&
            t.isIdentifier(obj.meta, { name: 'import' }) &&
            t.isIdentifier(obj.property, { name: 'meta' }) &&
            t.isIdentifier(path.node.property, { name: 'env' })
          ) {
            // Replace with `process.env`
            path.replaceWith(t.memberExpression(t.identifier('process'), t.identifier('env')));
          }
        }
      }
    };
  };

  return {
    presets: ['babel-preset-expo'],
    plugins: [replaceImportMetaEnv]
  };
};
