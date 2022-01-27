import {writeFileSync} from 'fs';
import {dirname} from 'path';
import type {FileChange, FileDefinition} from '@onecfg/core';
import {generateContent} from '@onecfg/core';
import mkdir from 'mkdirp';

export type AnyFileStatement = FileDefinition<any> | FileChange<any>;

export function onecfg(...fileStatements: readonly AnyFileStatement[]): void {
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
      throw new Error(`multiple file definitions: ${path}`);
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
