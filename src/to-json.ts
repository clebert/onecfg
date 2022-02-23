export function toJson(content: object): string {
  return `${JSON.stringify(content, undefined, 2)}\n`;
}
