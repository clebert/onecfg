import deepmerge from 'deepmerge';
import type {
  FileChange,
  FileChangeOptions,
  FileDeclaration,
} from './generate-content.js';
import {replaceContent} from './replace-content.js';

export interface MergeContentOptions extends FileChangeOptions {
  readonly replaceArrays?: boolean;
}

export function mergeContent<TContent extends object>(
  fileDeclaration: FileDeclaration<TContent>,
  content: TContent,
  options: MergeContentOptions = {},
): FileChange<TContent> {
  const {replaceArrays, ...fileChangeOptions} = options;

  return replaceContent(
    fileDeclaration,
    (previousContent) =>
      deepmerge(previousContent, content, {
        arrayMerge: (target, source) =>
          replaceArrays ? source : [...target, ...source],
      }),
    fileChangeOptions,
  );
}
