const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

require('dotenv').config('../../.env');

const DEV = process.env.NODE_ENV;

const getConfig = (overrides = {}) => ({
    mode: DEV ? 'development' : 'production',
    target: 'node',
    entry: './src/server/index.tsx',
    plugins: [new CleanWebpackPlugin()],
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './build',
        hot: true,
    },
    module: {
        rules: [
            {
                test: [/\.tsx?$/, /\.ts/],
                exclude: [
                    /node_modules/,
                    /__test__/,
                    /__stories__/,
                    /__mocks__/,
                ],
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' },
                    // {
                    //     loader: 'babel-loader',
                    //     options: {
                    //         presets: [
                    //             '@babel/preset-env',
                    //             '@babel/preset-react',
                    //             '@babel/preset-typescript',
                    //             '@emotion/babel-preset-css-prop',
                    //         ],
                    //         plugins: [
                    //             'emotion',
                    //             '@babel/plugin-proposal-class-properties',
                    //         ],
                    //     },
                    // },
                ],
            },
            {
                test: /\.svg$/,
                use: ['react-svg-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
    },
    externals: [webpackNodeExternals()],
    ...overrides,
});

const serverConfig = getConfig();
const clientConfig = getConfig({
    entry: './src/client/index.tsx',
    output: {
        filename: '[name].client_bundle.js',
        path: path.resolve(__dirname, './build/public'),
        publicPath: './',
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json',
    },
    externals: undefined,
});

module.exports = [serverConfig, clientConfig];
