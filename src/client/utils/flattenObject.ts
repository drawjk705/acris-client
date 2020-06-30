type flattenObjectProps = {
    object: Object;
    accumulatedKey?: string;
    currentDepth?: number;
    depth?: number;
};

interface IFlattenObject {
    ({
        object,
        accumulatedKey,
        currentDepth,
        depth,
    }: flattenObjectProps): Object;
}

export const flattenObject: IFlattenObject = ({
    object,
    accumulatedKey = '',
    currentDepth = -1,
    depth = Infinity,
}) => {
    if (
        typeof object === 'number' ||
        typeof object === 'string' ||
        object === undefined ||
        object === null ||
        currentDepth === depth
    ) {
        return { [`${accumulatedKey}`]: object };
    }

    return Object.entries(object).reduce(
        (acc, [key, value]) => ({
            ...flattenObject({
                object: value,
                accumulatedKey: `${accumulatedKey}_${key}`,
                currentDepth: currentDepth + 1,
                depth,
            }),
            ...acc,
        }),
        {}
    );
};
