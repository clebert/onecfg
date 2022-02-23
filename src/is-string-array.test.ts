import {isStringArray} from './is-string-array';

describe(`isStringArray()`, () => {
  test(`returns true`, () => {
    expect(isStringArray([])).toBe(true);
    expect(isStringArray([`foo`])).toBe(true);
  });

  test(`returns false`, () => {
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
