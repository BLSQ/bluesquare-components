const path = require('path');

module.exports = {
    entry: './index.js',
    mode:'development',
    // Where files should be sent once they are bundled
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '/dist'),
        library: {
            name: 'bluesquare-components',
            export: 'default',
            type:'umd',
            umdNamedDefine: true,
        },
        // libraryTarget: 'umd',
        // globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: { noEmit: false },
                    },
                },
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
                test: /\.json$/,
                loader: 'file-loader',
                type:'javascript/auto',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        fallback: {
            fs: false,
        },
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    devtool: 'source-map',
};
