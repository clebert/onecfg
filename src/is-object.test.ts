import {describe, expect, test} from '@jest/globals';
import {isObject} from './is-object.js';

describe(`isObject()`, () => {
  test(`returning true`, () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
  });

  test(`returning false`, () => {
    expect(isObject(``)).toBe(false);
    expect(isObject(`foo`)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});
