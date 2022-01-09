// @ts-check

const std = require(`@onecmd/standard-plugins`);
const nodeVersion = `16`;

/** @type {readonly import('onecmd').Plugin[]} */
const plugins = [
  std.editorconfig(),
  std.eslint(),
  std.git(),
  std.github({nodeVersion}),
  std.jest({coverage: true}),
  std.node(nodeVersion),
  std.npm(),
  std.prettier(),
  std.swc(),
  std.typescript(`node`, `package`),
  std.vscode({showFilesInEditor: false}),
  {setup: () => [{type: `ref`, path: `test`, attrs: {visible: true}}]},
];

module.exports = plugins;
