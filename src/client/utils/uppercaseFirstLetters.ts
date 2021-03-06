const defaultLowercaseStopWords = ['a', 'the', 'of', 'or', 'and'];
const defaultUppercaseStopWords = ['LLC'];

const keepUppercaseRegexes = [/[a-zA-Z0-9]+&[a-zA-Z0-9]/];

/**
 * converts first letter of each word to uppercase
 * @param str
 * @param delimiter
 * @param uppercaseStopWords - list of words to keep upper-cased
 * @param lowercaseStopWords - list of words to keep all lower-cased
 */
export const uppercaseFirstLetters = (
    str: string | null | undefined,
    delimiter = ' ',
    uppercaseStopWords: string[] = [],
    lowercaseStopWords: string[] = []
): string => {
    const allLowercaseStopWords = [
        ...defaultLowercaseStopWords,
        ...lowercaseStopWords,
    ];

    const allUppercaseStopWords = [
        ...defaultUppercaseStopWords,
        ...uppercaseStopWords,
    ];

    return str
        ? str
              .split(delimiter)
              .map((split) =>
                  allUppercaseStopWords.includes(split) ||
                  keepUppercaseRegexes.some((regex) => regex.test(split))
                      ? split
                      : split.toLowerCase()
              )
              .map((split, i) => {
                  if (
                      (i > 0 && allLowercaseStopWords.includes(split)) ||
                      !split
                  ) {
                      return split;
                  }
                  return `${split[0].toUpperCase()}${split.slice(1)}`;
              })
              .join(delimiter)
        : '';
};
