export function isStringArray(content: unknown): content is string[] {
  return Array.isArray(content) && content.every(isString);
}

function isString(content: unknown): content is string {
  return typeof content === `string`;
}
