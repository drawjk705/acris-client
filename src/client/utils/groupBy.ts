type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U;

type TObject = {
    [key in string | number]: any;
};

type TCriterion<T> = {
    criterion: {
        [K in keyof T]: T[K] extends never ? never : K;
    }[keyof T];
};

type TGrouping<T> = {
    [key in any]: T[];
};

type TPredicate<T> = {
    predicate: (obj: T) => boolean;
};

export const groupBy = <T extends TObject>(
    objects: T[],
    criterionOrPredicate: XOR<TCriterion<T>, TPredicate<T>>
): TGrouping<T> => {
    const { criterion, predicate } = criterionOrPredicate as any;

    return objects.reduce((acc: TGrouping<T>, obj) => {
        if (criterion) {
            if ((obj as Object).hasOwnProperty(criterion)) {
                const value = obj[criterion];

                if ((acc as Object).hasOwnProperty(value)) {
                    acc[value] = [...acc[value], obj];
                } else {
                    acc[value] = [obj];
                }
            }
        } else {
            const predicateVal = predicate(obj);

            if ((acc as Object).hasOwnProperty(predicateVal)) {
                acc[predicateVal] = [...acc[predicateVal], obj];
            } else {
                acc[predicateVal] = [obj];
            }
        }

        return acc;
    }, {});
};
