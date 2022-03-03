import type {FileDefinition} from './generate-content.js';
import {isStringArray} from './is-string-array.js';
import {toText} from './to-text.js';

export function defineTextFile(
  path: string,
  content: readonly string[],
): FileDefinition<readonly string[]> {
  return {path, content, predicate: isStringArray, serializer: toText};
}
