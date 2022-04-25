const path = require('path');

module.exports = {
    entry: {
        main:'./index.js', 
    },
    // mode:'development',
    // Where files should be sent once they are bundled
    output: {
        filename: 'index.js',
        path: path.join(__dirname, '/dist'),
        library: {
            name: 'bluesquare-components',
            export: 'default',
            type: 'umd',
            umdNamedDefine: true,
        },
        assetModuleFilename: 'assets/[name][ext]',
        // libraryTarget: 'umd',
        // globalObject: 'this',
    },
    // optimization:{
    //     splitChunks:{chunks:'all'},
    // },
    externals:{
        react:'react',
        "react-dom":'react-dom',
        "prop-types":'prop-types'
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
