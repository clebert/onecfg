import {defineTextFile} from './define-text-file';
import {generateContent} from './generate-content';
import {replaceContent} from './replace-content';

describe(`replaceContent()`, () => {
  test(`replace content of a text file`, () => {
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
