import {writeFileSync} from 'fs';
import {dirname} from 'path';
import type {
  FileContentChange,
  FileDefinition,
  FileGeneratorConfig,
} from '@onecfg/core';
import {generateFiles} from '@onecfg/core';
import mkdir from 'mkdirp';

export function onecfg<TFileDefinition extends FileDefinition<any>>(
  ...configs: readonly FileGeneratorConfig<TFileDefinition>[]
): void {
  const definitions: TFileDefinition[] = [];
  const contentChanges: FileContentChange<any, TFileDefinition>[] = [];

  for (const config of configs) {
    definitions.push(...(config.definitions ?? []));
    contentChanges.push(...(config.contentChanges ?? []));
  }

  for (const {path, data} of generateFiles({definitions, contentChanges})) {
    mkdir.sync(dirname(path));
    writeFileSync(path, data, {encoding: `utf-8`});
  }
}
