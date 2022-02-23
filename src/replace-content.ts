import type {
  FileChange,
  FileChangeOptions,
  FileDeclaration,
} from './generate-content';

export function replaceContent<TContent>(
  fileDeclaration: FileDeclaration<TContent>,
  content: TContent,
  options: FileChangeOptions = {},
): FileChange<TContent> {
  const {path, predicate} = fileDeclaration;

  return {path, predicate, options, replacer: () => content};
}
