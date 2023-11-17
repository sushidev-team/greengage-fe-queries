import { build, context } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import process from 'process';

const sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  treeShaking: true,
  plugins: [nodeExternalsPlugin()],
};
const cjsConfig = {
  ...sharedConfig,
  outfile: 'dist/index.js',
  platform: 'node', // for CJS
  format: 'cjs',
};
const esmConfig = {
  ...sharedConfig,
  outfile: 'dist/index.esm.js',
  platform: 'neutral', // for ESM
  format: 'esm',
};

if (process.argv.includes('--watch')) {
  const cjsContext = await context(cjsConfig);
  const esmContext = await context(esmConfig);
  await cjsContext.watch();
  await esmContext.watch();
} else {
  build(cjsConfig);
  build(esmConfig);
}
