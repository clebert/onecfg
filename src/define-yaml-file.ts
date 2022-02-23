import type {FileDefinition} from './generate-content';
import {isObject} from './is-object';
import {toYaml} from './to-yaml';

export function defineYamlFile(
  path: string,
  content: object,
): FileDefinition<object> {
  return {path, content, predicate: isObject, serializer: toYaml};
}
