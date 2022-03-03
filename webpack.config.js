const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const deps = require("./package.json").dependencies;

module.exports = {
    entry: './index.js',
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
        library: {
            name: 'bluesquare-components',
            type: 'var',
            export: 'default',
        },
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            ['@babel/preset-env', { targets: { node: '14' } }],
                            '@babel/preset-react',
                            [
                                '@babel/preset-typescript',
                                { isTSX: true, allExtensions: true },
                            ],
                        ],
                        plugins: ['@babel/transform-runtime', 'formatjs'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['airbnb'],
                        },
                    },
                    {
                        loader: 'react-svg-loader',
                        query: {
                            jsx: true,
                        },
                    },
                ],
            },
        ],
    },
    // plugins: [new MiniCssExtractPlugin()],
};
