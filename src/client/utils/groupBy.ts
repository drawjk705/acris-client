type withCriterion<T> = {
    criterion: keyof T;
    predicate?: never;
};

type withPredicate<T> = {
    criterion?: never;
    predicate: (obj: T) => boolean;
};

type TGrouping<T> = {
    [key in any]: T[];
};

type TObject<T> = {
    [key in keyof T]: any;
};

export const groupBy = <T, S extends withCriterion<T> | withPredicate<T>>(
    items: T[],
    criterionOrPredicate: T extends { [key: string]: any }
        ? S extends withCriterion<T>
            ? withCriterion<T>
            : withPredicate<T>
        : withPredicate<T>
): TGrouping<T> => {
    const { criterion, predicate } = criterionOrPredicate;

    return items.reduce((acc: TGrouping<T>, obj) => {
        if (criterion) {
            const objAsObject = obj as TObject<T>;

            if (objAsObject.hasOwnProperty(criterion)) {
                const value = objAsObject[criterion];

                if ((acc as Object).hasOwnProperty(value)) {
                    acc[value] = [...acc[value], obj];
                } else {
                    acc[value] = [obj];
                }
            }
        } else if (predicate) {
            const predicateVal = predicate(obj).toString();

            if ((acc as Object).hasOwnProperty(predicateVal)) {
                acc[predicateVal] = [...acc[predicateVal], obj];
            } else {
                acc[predicateVal] = [obj];
            }
        } else {
            obj;
        }

        return acc;
    }, {});
};
