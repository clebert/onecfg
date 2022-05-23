import {readFileSync} from 'fs';
import rimraf from 'rimraf';
import type {Predicate, Serializer} from './generate-content.js';
import {writeFiles} from './write-files.js';

const predicate: Predicate<string> = (value: unknown): value is string =>
  typeof value === `string`;

const serializer: Serializer<string> = (value) => value.toUpperCase();

describe(`writeFiles()`, () => {
  test(`writing multiple files`, () => {
    rimraf.sync(`test`);

    writeFiles(
      {path: `test/a.txt`, predicate, replacer: () => `a1`},
      {path: `test/a.txt`, predicate, replacer: () => `a2`},
      {path: `test/b.txt`, predicate, replacer: () => `b1`},
      {path: `test/d.txt`, predicate, replacer: () => `d1`},
      {path: `test/a.txt`, content: `a0`, predicate, serializer},
      {path: `test/b.txt`, content: `b0`, predicate, serializer},
      {path: `test/c.txt`, content: `c0`, predicate, serializer},
    );

    expect(readFileSync(`test/a.txt`, {encoding: `utf-8`})).toBe(`A2`);
    expect(readFileSync(`test/b.txt`, {encoding: `utf-8`})).toBe(`B1`);
    expect(readFileSync(`test/c.txt`, {encoding: `utf-8`})).toBe(`C0`);
  });

  test(`duplicate file definitions`, () => {
    expect(() =>
      writeFiles(
        {path: `test/a.txt`, content: `a0`, predicate, serializer},
        {path: `test/a.txt`, content: `a0`, predicate, serializer},
      ),
    ).toThrow(new Error(`Duplicate file definitions: test/a.txt`));
  });
});
