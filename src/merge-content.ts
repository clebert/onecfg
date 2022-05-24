import deepmerge from 'deepmerge';
import type {
  FileChange,
  FileChangeOptions,
  FileDeclaration,
} from './generate-content.js';
import {replaceContent} from './replace-content.js';

export interface MergeContentOptions extends FileChangeOptions {
  readonly dedupeArrays?: boolean;
  readonly replaceArrays?: boolean;
}

export function mergeContent<TContent extends object>(
  fileDeclaration: FileDeclaration<TContent>,
  content: TContent,
  options: MergeContentOptions = {},
): FileChange<TContent> {
  const {dedupeArrays, replaceArrays, ...fileChangeOptions} = options;

  return replaceContent(
    fileDeclaration,
    (previousContent) =>
      deepmerge(previousContent, content, {
        arrayMerge: (target, source) => {
          const array = replaceArrays ? source : [...target, ...source];

          return dedupeArrays ? Array.from(new Set(array)) : array;
        },
      }),
    fileChangeOptions,
  );
}
