import {defineTextFile} from './define-text-file.js';
import {generateContent} from './generate-content.js';
import {replaceContent} from './replace-content.js';

describe(`replaceContent()`, () => {
  test(`replacing content of a text file`, () => {
    const textFile = defineTextFile(`file.txt`, [`a`]);

    expect(
      generateContent(
        textFile,
        replaceContent(
          textFile,
          (previousContent) => [...previousContent, `c`],
          {priority: 1},
        ),
        replaceContent(textFile, (previousContent) => [
          ...previousContent,
          `b`,
        ]),
      ),
    ).toBe(`a\nb\nc\n`);
  });
});
