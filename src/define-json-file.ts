import type {FileDefinition} from './generate-content';
import {isObject} from './is-object';
import {toJson} from './to-json';

export function defineJsonFile(
  path: string,
  content: object,
): FileDefinition<object> {
  return {path, content, predicate: isObject, serializer: toJson};
}
