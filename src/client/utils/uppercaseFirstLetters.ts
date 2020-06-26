export {};

declare global {
    interface String {
        uppercaseFirstLetters: (
            delimiter?: string,
            uppercaseStopWords?: string[],
            lowercaseStopWords?: string[]
        ) => string;
    }
}

const defaultLowercaseStopWords = ['a', 'the', 'of', 'or', 'and'];
const defaultUppercaseStopWords = ['LLC'];

/**
 * converts first letter of each word to uppercase
 * @param str
 * @param delimiter
 * @param uppercaseStopWords - list of words to keep upper-cased
 * @param lowercaseStopWords - list of words to keep all lower-cased
 */
String.prototype.uppercaseFirstLetters = function(
    delimiter = ' ',
    uppercaseStopWords: string[] = [],
    lowercaseStopWords: string[] = []
) {
    const allLowercaseStopWords = [
        ...defaultLowercaseStopWords,
        ...lowercaseStopWords,
    ];

    const allUppercaseStopWords = [
        ...defaultUppercaseStopWords,
        ...uppercaseStopWords,
    ];

    return (
        this &&
        this.split(delimiter)
            .map((split) =>
                allUppercaseStopWords.includes(split)
                    ? split
                    : split.toLowerCase()
            )
            .map((split, i) => {
                if (
                    (i > 0 && allLowercaseStopWords.includes(split)) ||
                    !split.length
                ) {
                    return split;
                }
                return `${split[0].toUpperCase()}${split.slice(1)}`;
            })
            .join(delimiter)
    );
};
