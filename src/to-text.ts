export function toText(content: readonly string[]): string {
  return `${content.join(`\n`).trim()}\n`;
}
