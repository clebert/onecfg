// @ts-check

import {
  editorconfig,
  eslint,
  git,
  github,
  ignore,
  javascript,
  jest,
  node,
  npm,
  prettier,
  swc,
  typescript,
  vscode,
} from '@onecfg/standard';
import {writeFiles} from './lib/index.js';

writeFiles(
  ...editorconfig(),
  ...eslint(),
  ...git(),
  ...github(),
  ...ignore(`test`),

  ...javascript({
    target: {ecmaVersion: `es2021`, moduleType: `es2020`, node: true},
  }),

  ...jest(),
  ...node({nodeVersion: `16`}),
  ...npm(),
  ...prettier(),
  ...swc(),
  ...typescript({declaration: true, outDir: `lib`, sourceMap: true}),
  ...vscode({showAllFilesInEditor: false}),
);
