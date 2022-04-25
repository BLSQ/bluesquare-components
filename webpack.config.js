const path = require('path');

module.exports = {
    entry: './index.js',
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
        "@material-ui/core":"@material-ui/core",
        "@material-ui/icons": "@material-ui/icons",
        "@material-ui/lab":"@material-ui/lab",
        "@material-ui/pickers":"@material-ui/pickers",
        "classnames":"classnames",
        "color":"color",
        "moment":"moment",
        "prop-types":'prop-types',
        "react":'react',
        "react-dom":'react-dom',
        'react-intl':'react-intl',
        "react-query":"react-query",
        "react-table":"react-table",
        "typescript":"typescript"
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
