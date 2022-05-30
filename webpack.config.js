const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        // index: './index.ts',
        LoadingSpinner: './src/components/LoadingSpinner/index.tsx',
    },
    // entry: './index.ts',
    mode: 'development',
    output: {
        publicPath: '',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'bluesquare-components',
            export: 'default',
            type: 'umd',
            umdNamedDefine: true,
        },
        assetModuleFilename: 'assets/[name][ext]',
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                [
                                    '@babel/preset-env',
                                    { targets: { node: '14' } },
                                ],
                                '@babel/preset-react',
                            ],
                            plugins: [
                                '@babel/transform-runtime',
                                'formatjs',
                                '@babel/plugin-proposal-nullish-coalescing-operator',
                                '@babel/proposal-class-properties',
                                '@babel/proposal-object-rest-spread',
                                '@babel/plugin-proposal-optional-chaining',
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: { noEmit: false },
                        },
                    },
                ],
                exclude: /node_modules/,
            },
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
                        ],
                        plugins: ['@babel/transform-runtime', 'formatjs'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'react-svg-loader',
                    },
                ],
            },
            {
                test: /.json$/,
                type: 'asset/resource',
                generator: {
                    filename: 'locale/[name][ext]',
                },
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        fallback: {
            fs: false,
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'source-map',
};
