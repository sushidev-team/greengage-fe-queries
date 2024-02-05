import { build, context } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import process from 'process';
import { globSync } from 'glob';
import fs from 'fs';
import { stripIgnoredCharacters } from 'graphql';
import chokidar from 'chokidar';

function bundleGraphQLFiles() {
  const files = globSync('src/**/*.graphql');
  const contents = files.map((file) => stripIgnoredCharacters(fs.readFileSync(file, 'utf8'))).join('');
  fs.writeFileSync('dist/index.graphql', contents, 'utf8');
}

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
  chokidar.watch('src/**/*.graphql').on('all', () => bundleGraphQLFiles());
} else {
  await build(cjsConfig);
  await build(esmConfig);
  bundleGraphQLFiles();
}
