import type {FileDefinition} from './generate-content.js';
import {isObject} from './is-object.js';
import {toJson} from './to-json.js';

export function defineJsonFile(
  path: string,
  content: object,
): FileDefinition<object> {
  return {path, content, predicate: isObject, serializer: toJson};
}
