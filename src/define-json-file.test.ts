import {writeFileSync} from 'node:fs';
import {describe, expect, test} from '@jest/globals';
import mkdir from 'mkdirp';
import rimraf from 'rimraf';
import {defineJsonFile} from './define-json-file.js';
import {generateContent} from './generate-content.js';
import {toJson} from './to-json.js';

describe(`defineJsonFile()`, () => {
  test(`try read non-existing file`, () => {
    rimraf.sync(`test/file.json`);

    expect(
      generateContent(
        defineJsonFile(`test/file.json`, {}, {tryReadFile: true}),
      ),
    ).toBe(toJson({}));
  });

  test(`try read existing file`, () => {
    mkdir.sync(`test`);
    writeFileSync(`test/file.json`, toJson({foo: `bar`}), {encoding: `utf-8`});

    expect(
      generateContent(
        defineJsonFile(`test/file.json`, {}, {tryReadFile: true}),
      ),
    ).toBe(toJson({foo: `bar`}));
  });

  test(`do not try read existing file`, () => {
    mkdir.sync(`test`);
    writeFileSync(`test/file.json`, toJson({foo: `bar`}), {encoding: `utf-8`});

    expect(generateContent(defineJsonFile(`test/file.json`, {}))).toBe(
      toJson({}),
    );
  });
});
