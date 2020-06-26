export {};

declare global {
    interface Array<T> {
        groupBy: <S extends withCriterion | withPredicate<T>>(
            criterionOrPredicate: T extends Object
                ? S extends withCriterion
                    ? withCriterion
                    : withPredicate<T>
                : withPredicate<T>
        ) => TGrouping<T>;
    }
}

type withCriterion = {
    criterion: string | number;
    predicate?: never;
};

type withPredicate<T> = {
    criterion?: never;
    predicate: (obj: T) => boolean;
};

type TGrouping<T> = {
    [key in any]: T[];
};

Array.prototype.push;

Array.prototype.groupBy = function<
    T,
    S extends withCriterion | withPredicate<T>
>(
    criterionOrPredicate: T extends Object
        ? S extends withCriterion
            ? withCriterion
            : withPredicate<T>
        : withPredicate<T>
): TGrouping<T> {
    const { criterion, predicate } = criterionOrPredicate;

    return this.reduce((acc: TGrouping<T>, obj) => {
        if (criterion) {
            if ((obj as Object).hasOwnProperty(criterion)) {
                const value = obj[criterion];

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
