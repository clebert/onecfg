import type {FileDefinition} from './generate-content.js';
import {isObject} from './is-object.js';
import {toText} from './to-text.js';
import {toYaml} from './to-yaml.js';

export interface DefineYamlFileOptions {
  readonly headerComment?: string;
}

export function defineYamlFile(
  path: string,
  initialContent: object,
  options: DefineYamlFileOptions = {},
): FileDefinition<object> {
  const headerComment = options.headerComment?.trim();

  return {
    path,
    content: initialContent,
    predicate: isObject,
    serializer: (content) =>
      toText(
        headerComment
          ? [
              ...headerComment.split(`\n`).map((line) => `# ${line.trim()}`),
              toYaml(content),
            ]
          : [toYaml(content)],
      ),
  };
}
