import {writeFileSync} from 'node:fs';
import {dirname} from 'node:path';
import mkdir from 'mkdirp';
import type {FileChange, FileDefinition} from './generate-content.js';
import {generateContent} from './generate-content.js';

export type FileStatement = FileDefinition<any> | FileChange<any>;

export function writeFiles(...fileStatements: readonly FileStatement[]): void {
  const fileDefinitions = fileStatements.filter(
    (fileDeclaration): fileDeclaration is FileDefinition<any> =>
      `serializer` in fileDeclaration,
  );

  const fileChanges = fileStatements.filter(
    (fileDeclaration): fileDeclaration is FileChange<any> =>
      `replacer` in fileDeclaration,
  );

  const paths = new Set<string>();

  for (const {path} of fileDefinitions) {
    if (paths.has(path)) {
      throw new Error(`Duplicate file definition: ${path}`);
    }

    paths.add(path);
  }

  for (const fileDefinition of fileDefinitions) {
    const data = generateContent(fileDefinition, ...fileChanges);
    const {path} = fileDefinition;

    mkdir.sync(dirname(path));
    writeFileSync(path, data, {encoding: `utf-8`});
  }
}
