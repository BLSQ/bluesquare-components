const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './index.js',
    mode: 'development',
    // Where files should be sent once they are bundled
    output: {
        filename: 'index.js',
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
    externals:[nodeExternals()],
    // externals: {
        // '@material-ui/core': {
        //     commonjs: '@material-ui/core',
        //     commonjs2: '@material-ui/core',
        //     amd: '@material-ui/core',
        // },
        // '@material-ui/icons': {
        //     commonjs: '@material-ui/icons',
        //     commonjs2: '@material-ui/icons',
        //     amd: '@material-ui/icons',
        // },
        // '@material-ui/lab': {
        //     commonjs: '@material-ui/lab',
        //     commonjs2: '@material-ui/lab',
        //     amd: '@material-ui/lab',
        // },
        // '@material-ui/pickers': {
        //     commonjs: '@material-ui/pickers',
        //     commonjs2: '@material-ui/pickers',
        //     amd: '@material-ui/pickers',
        // },
        // classnames: {
        //     commonjs: 'classnames',
        //     commonjs2: 'classnames',
        //     amd: 'classnames',
        // },
        // color: { commonjs: 'color', commonjs2: 'color', amd: 'color' },
        // moment: { commonjs: 'moment', commonjs2: 'moment', amd: 'moment' },
        // 'prop-types': {
        //     commonjs: 'prop-types',
        //     commonjs2: 'prop-types',
        //     amd: 'prop-types',
        // },
        // react: { commonjs: 'react', commonjs2: 'react', amd: 'react' },
        // 'react-dom': {
        //     commonjs: 'react-dom',
        //     commonjs2: 'react-dom',
        //     amd: 'react-dom',
        // },
        // 'react-intl': {
        //     commonjs: 'react-intl',
        //     commonjs2: 'react-intl',
        //     amd: 'react-intl',
        // },
        // 'react-query': {
        //     commonjs: 'react-query',
        //     commonjs2: 'react-query',
        //     amd: 'react-query',
        // },
        // 'react-table': {
        //     commonjs: 'react-table',
        //     commonjs2: 'react-table',
        //     amd: 'react-table',
        // },
        // typescript: {
        //     commonjs: 'typescript',
        //     commonjs2: 'typescript',
        //     amd: 'typescript',
        // },
    // },

    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                enforce: 'pre',
                use: { loader: 'source-map-loader' },
                exclude: /node_modules/,
            },
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
