import {readFileSync} from 'fs';
import type {Predicate, Serializer} from '@onecfg/core';
import rimraf from 'rimraf';
import {onecfg} from './onecfg';

const predicate: Predicate<string> = (value: unknown): value is string =>
  typeof value === `string`;

const serializer: Serializer<string> = (value) => value;

test(`onecfg`, () => {
  rimraf.sync(`test`);

  onecfg(
    {
      definitions: [
        {
          path: `test/a.txt`,
          content: {initialValue: `a0`, predicate, serializer},
        },
        {
          path: `test/b.txt`,
          content: {initialValue: `b0`, predicate, serializer},
        },
      ],
    },
    {
      definitions: [
        {
          path: `test/c.txt`,
          content: {initialValue: `c0`, predicate, serializer},
        },
      ],
      contentChanges: [{path: `test/a.txt`, predicate, reducer: () => `a1`}],
    },
    {
      contentChanges: [{path: `test/b.txt`, predicate, reducer: () => `b1`}],
    },
  );

  expect(readFileSync(`test/a.txt`, {encoding: `utf-8`})).toBe(`a1`);
  expect(readFileSync(`test/b.txt`, {encoding: `utf-8`})).toBe(`b1`);
  expect(readFileSync(`test/c.txt`, {encoding: `utf-8`})).toBe(`c0`);
});
