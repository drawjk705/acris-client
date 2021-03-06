module.exports = {
    stories: ['../src/**/__stories__/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/preset-typescript',
        '@storybook/addon-viewport/register',
    ],
    webpackFinal: async (config) => {
        // do mutation to the config

        const rules = config.module.rules;

        // modify storybook's file-loader rule to avoid conflicts with your inline svg
        const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        rules.push({
            test: /\.svg$/,
            use: ['react-svg-loader'],
        });

        config.module.rules.push({
            test: /\.(tsx|ts)$/,
            use: [
                { loader: require.resolve('babel-loader') },
                { loader: require.resolve('ts-loader') },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
