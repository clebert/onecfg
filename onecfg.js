// @ts-check

import {
  editorconfig,
  eslint,
  git,
  github,
  javascript,
  jest,
  node,
  npm,
  prettier,
  swc,
  typescript,
  vscode,
} from '@onecfg/standard';
import {mergeContent, onecfg} from './lib/index.js';

onecfg(
  ...editorconfig(),
  ...eslint(),
  ...git(),
  ...github(),
  ...javascript({ecmaVersion: `es2021`, moduleType: `es2020`}),
  ...jest(),
  ...node({nodeVersion: `16`}),
  ...npm(),
  ...prettier(),
  ...swc(),
  ...typescript({declaration: true, outDir: `lib`, sourceMap: true}),
  ...vscode({includeAllFiles: false}),

  mergeContent(git.ignoreFile, [`test`]),
  mergeContent(vscode.settingsFile, {'files.exclude': {test: true}}),
);
