import {
  editorconfig,
  eslint,
  git,
  github,
  ignore,
  jest,
  node,
  npm,
  prettier,
  swc,
  typescript,
  vscode,
} from '@onecfg/standard';
import {writeFiles} from './lib/index.js';

const target = `es2022`;

writeFiles(
  ...editorconfig(),
  ...eslint(),
  ...git(),
  ...github(),
  ...ignore(`test`),
  ...jest(),
  ...node({nodeVersion: `18`}),
  ...npm(),
  ...prettier(),
  ...swc({target}),
  ...typescript({target, emit: true}),
  ...vscode({includeFilesInExplorer: false}),
);
