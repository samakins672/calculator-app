const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // By default webpack prefers the `module` field (ESM). Some packages
  // (e.g. zustand) ship ESM builds that contain `import.meta` usage which
  // can break when the runtime executes the bundle as non-ESM. Force
  // webpack to prefer the CommonJS `main` field so the CJS build is used.
  config.resolve = config.resolve || {};
  config.resolve.mainFields = ['browser', 'main', 'module'];

  // Additionally, explicitly alias `zustand` to its CommonJS entry so the
  // web bundler cannot pick up the ESM `./esm/index.mjs` which contains
  // `import.meta`. This ensures the distributed CJS build (index.js) is
  // used for the web dev server.
  config.resolve.alias = Object.assign({}, config.resolve.alias || {}, {
    'zustand': path.resolve(__dirname, 'node_modules', 'zustand', 'index.js')
  });

  return config;
};
