import {readFileSync} from 'node:fs';
import type {FileDefinition} from './generate-content.js';
import {isObject} from './is-object.js';
import {toJson} from './to-json.js';

export interface DefineJsonFileOptions {
  readonly tryReadFile?: boolean;
}

export function defineJsonFile(
  path: string,
  initialContent: object,
  options: DefineJsonFileOptions = {},
): FileDefinition<object> {
  try {
    if (options.tryReadFile) {
      const data = readFileSync(path, {encoding: `utf-8`});

      initialContent = JSON.parse(data);
    }
  } catch {
    console.debug(`Unable to read JSON file: ${path}`);
  }

  return {
    path,
    content: initialContent,
    predicate: isObject,
    serializer: toJson,
  };
}
