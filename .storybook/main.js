module.exports = {
    stories: ['../src/**/__stories__/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/preset-typescript',
    ],
    webpackFinal: async (config) => {
        // do mutation to the config

        const rules = config.module.rules;

        // modify storybook's file-loader rule to avoid conflicts with your inline svg
        const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.inline.svg$/;

        rules.push({
            test: /\.inline.svg$/,
            use: ['react-svg-loader'],
        });

        return config;
    },
};
