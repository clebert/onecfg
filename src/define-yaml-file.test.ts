import {defineYamlFile} from './define-yaml-file.js';
import {generateContent} from './generate-content.js';

describe(`defineYamlFile()`, () => {
  test(`no header comment`, () => {
    expect(generateContent(defineYamlFile(`file.yml`, {foo: `bar`}))).toBe(
      `foo: bar\n`,
    );

    expect(
      generateContent(
        defineYamlFile(`file.yml`, {foo: `bar`}, {headerComment: ``}),
      ),
    ).toBe(`foo: bar\n`);

    expect(
      generateContent(
        defineYamlFile(`file.yml`, {foo: `bar`}, {headerComment: `  `}),
      ),
    ).toBe(`foo: bar\n`);
  });

  test(`single line header comment`, () => {
    expect(
      generateContent(
        defineYamlFile(`file.yml`, {foo: `bar`}, {headerComment: `  a b c `}),
      ),
    ).toBe(`# a b c\nfoo: bar\n`);
  });

  test(`multi line header comment`, () => {
    expect(
      generateContent(
        defineYamlFile(
          `file.yml`,
          {foo: `bar`},
          {headerComment: `  a b c \n  1 2 3  `},
        ),
      ),
    ).toBe(`# a b c\n# 1 2 3\nfoo: bar\n`);
  });
});
