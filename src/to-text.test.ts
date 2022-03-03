import {toText} from './to-text.js';

describe(`toText()`, () => {
  test(`generating text`, () => {
    expect(toText([])).toBe(`\n`);
    expect(toText([`foo`, `bar`, `baz`])).toBe(`foo\nbar\nbaz\n`);
  });
});
