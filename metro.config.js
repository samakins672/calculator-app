const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure Metro will transform .mjs and .cjs files from node_modules when needed
config.resolver = config.resolver || {};
config.resolver.sourceExts = Array.from(new Set([...(config.resolver.sourceExts || []), 'mjs', 'cjs']));

// Prefer the CommonJS `main` field before the ESM `module` field so that
// packages which ship both CJS and ESM builds (for example `zustand`) will
// resolve to their CJS entry when running in Metro. This avoids runtime
// `import.meta` usage appearing in the bundle when Metro serves a non-ESM
// runtime (which throws "Cannot use 'import.meta' outside a module").
// Metro recognizes `resolverMainFields` at the config root. Set it so the
// resolver prefers CJS `main` over ESM `module` when both are present.
config.resolverMainFields = ['browser', 'main', 'module'];

module.exports = config;
