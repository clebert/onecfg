import {toYaml} from './to-yaml';

describe(`toYaml()`, () => {
  test(`generates YAML without references`, () => {
    const baz = {baz: 1};

    expect(toYaml({foo: `a`, bar: [baz, baz]})).toBe(
      `foo: a\nbar:\n  - baz: 1\n  - baz: 1\n`,
    );
  });
});
