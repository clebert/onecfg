import {isStringArray} from './is-string-array.js';

describe(`isStringArray()`, () => {
  test(`returning true`, () => {
    expect(isStringArray([])).toBe(true);
    expect(isStringArray([`foo`])).toBe(true);
  });

  test(`returning false`, () => {
    expect(isStringArray([1])).toBe(false);
    expect(isStringArray({})).toBe(false);
    expect(isStringArray(``)).toBe(false);
    expect(isStringArray(`foo`)).toBe(false);
    expect(isStringArray(0)).toBe(false);
    expect(isStringArray(1)).toBe(false);
    expect(isStringArray(null)).toBe(false);
    expect(isStringArray(undefined)).toBe(false);
  });
});
