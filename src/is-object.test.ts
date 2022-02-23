import {isObject} from './is-object';

describe(`isObject()`, () => {
  test(`returns true`, () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
  });

  test(`returns false`, () => {
    expect(isObject(``)).toBe(false);
    expect(isObject(`foo`)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});
