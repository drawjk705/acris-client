type makeTransitionProps = {
    transitionProperties: string[];
    transitionDuration?: string;
    transitionTimingFunction?: string;
    transitionDelay?: string;
};

export const makeTransition = ({
    transitionProperties,
    transitionDuration = '0.5s',
    transitionTimingFunction = 'ease-in-out',
    transitionDelay = '0s',
}: makeTransitionProps) => ({
    transitionProperty: transitionProperties.join(', '),
    transitionDuration,
    transitionTimingFunction,
    transitionDelay,
});
