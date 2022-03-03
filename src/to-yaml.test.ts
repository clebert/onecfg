import {toYaml} from './to-yaml.js';

describe(`toYaml()`, () => {
  test(`generating YAML without references`, () => {
    const baz = {baz: 1};

    expect(toYaml({foo: `a`, bar: [baz, baz]})).toBe(
      `foo: a\nbar:\n  - baz: 1\n  - baz: 1\n`,
    );
  });
});
