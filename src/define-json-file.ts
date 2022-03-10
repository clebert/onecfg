import type {FileDefinition} from './generate-content.js';
import {isObject} from './is-object.js';
import {toJson} from './to-json.js';

export function defineJsonFile(
  path: string,
  initialContent: object,
): FileDefinition<object> {
  return {
    path,
    content: initialContent,
    predicate: isObject,
    serializer: toJson,
  };
}
