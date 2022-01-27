import {readFileSync} from 'fs';
import type {Predicate, Serializer} from '@onecfg/core';
import rimraf from 'rimraf';
import {onecfg} from './onecfg';

const predicate: Predicate<string> = (value: unknown): value is string =>
  typeof value === `string`;

const serializer: Serializer<string> = (value) => value.toUpperCase();

describe(`onecfg`, () => {
  test(`generating multiple files`, () => {
    rimraf.sync(`test`);

    onecfg(
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

  test(`multiple file definitions`, () => {
    expect(() =>
      onecfg(
        {path: `test/a.txt`, content: `a0`, predicate, serializer},
        {path: `test/a.txt`, content: `a0`, predicate, serializer},
      ),
    ).toThrow(new Error(`multiple file definitions: test/a.txt`));
  });
});
