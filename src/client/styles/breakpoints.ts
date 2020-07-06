const mediaQuery = (width: number) => `@media (min-width: ${width}px)`;

export const breakpoints = {
    small: mediaQuery(600),
    medium: mediaQuery(768),
    large: mediaQuery(992),
    xLarge: mediaQuery(1200),
};
