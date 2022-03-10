import type {FileDefinition} from './generate-content.js';
import {isStringArray} from './is-string-array.js';
import {toText} from './to-text.js';

export function defineTextFile(
  path: string,
  initialContent: readonly string[],
): FileDefinition<readonly string[]> {
  return {
    path,
    content: initialContent,
    predicate: isStringArray,
    serializer: toText,
  };
}
