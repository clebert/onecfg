import {toJson} from './to-json.js';

describe(`toJson()`, () => {
  test(`generating JSON`, () => {
    expect(toJson({foo: `a`, bar: [0, 1]})).toBe(
      `{\n  "foo": "a",\n  "bar": [\n    0,\n    1\n  ]\n}\n`,
    );
  });
});
