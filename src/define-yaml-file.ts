import type {FileDefinition} from './generate-content.js';
import {isObject} from './is-object.js';
import {toYaml} from './to-yaml.js';

export function defineYamlFile(
  path: string,
  content: object,
): FileDefinition<object> {
  return {path, content, predicate: isObject, serializer: toYaml};
}
