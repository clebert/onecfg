import {dump} from 'js-yaml';

export function toYaml(content: object): string {
  return dump(content, {noRefs: true});
}
