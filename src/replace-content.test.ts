import {defineTextFile} from './define-text-file.js';
import {generateContent} from './generate-content.js';
import {replaceContent} from './replace-content.js';

describe(`replaceContent()`, () => {
  test(`replacing content of a text file`, () => {
    const textFile = defineTextFile(`file.txt`, [`a`]);

    expect(
      generateContent(
        textFile,
        replaceContent(textFile, [`c`], {priority: 1}),
        replaceContent(textFile, [`b`]),
      ),
    ).toBe(`c\n`);
  });
});
