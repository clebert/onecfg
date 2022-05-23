import type {
  FileChange,
  FileChangeOptions,
  FileDeclaration,
  Replacer,
} from './generate-content.js';

export function replaceContent<TContent>(
  fileDeclaration: FileDeclaration<TContent>,
  replacer: Replacer<TContent>,
  options: FileChangeOptions = {},
): FileChange<TContent> {
  const {path, predicate} = fileDeclaration;

  return {path, predicate, options, replacer};
}
