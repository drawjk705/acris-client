const makeFont = ({
    name = 'Roboto',
    weight = 400,
    size = 15,
}: {
    name?: string;
    weight?: number;
    size?: number;
}) => `${weight} ${size}px ${name}`;

export const FONT = {
    RobotoThin: makeFont({ weight: 100 }),
    RobotoLight: makeFont({ weight: 300 }),
    RobotoRegular: makeFont({ weight: 400 }),
    RobotoMedium: makeFont({ weight: 500 }),
    RobotoBold: makeFont({ weight: 700 }),
    RobotoHeavy: makeFont({ weight: 900 }),
};
