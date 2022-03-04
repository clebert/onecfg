import {defineJsonFile} from './define-json-file.js';
import {defineYamlFile} from './define-yaml-file.js';
import {generateContent} from './generate-content.js';
import {mergeContent} from './merge-content.js';
import {toJson} from './to-json.js';
import {toYaml} from './to-yaml.js';

describe(`mergeContent()`, () => {
  test(`merging content of a JSON file`, () => {
    const jsonFile = defineJsonFile(`file.json`, {foo: {bar: `a`}, baz: [1]});

    expect(
      generateContent(
        jsonFile,
        mergeContent(jsonFile, {foo: {bar: `c`}, baz: [3]}, {priority: 1}),
        mergeContent(jsonFile, {foo: {bar: `b`}, baz: [2]}),
      ),
    ).toEqual(toJson({foo: {bar: `c`}, baz: [1, 2, 3]}));
  });

  test(`merging content of a YAML file where arrays are replaced`, () => {
    const yamlFile = defineYamlFile(`file.yml`, {foo: {bar: `a`}, baz: [1]});

    expect(
      generateContent(
        yamlFile,
        mergeContent(
          yamlFile,
          {foo: {bar: `b`}, baz: [2]},
          {replaceArrays: true},
        ),
      ),
    ).toEqual(toYaml({foo: {bar: `b`}, baz: [2]}));
  });
});