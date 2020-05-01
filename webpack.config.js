const webpack = require('webpack');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry:  './src/js/GradientPicker.jsx',

    output: {
        publicPath: 'dist',
        filename: 'gpickr.min.js',
        library: 'GPickr',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },

    devServer: {
        contentBase: `${__dirname}/`,
        host: '0.0.0.0',
        port: 3007
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: 'gpickr.min.css'
        }),
        new webpack.SourceMapDevToolPlugin({})
    ],
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    }

    // devtool: 'eval-cheap-module-source-map',
};
