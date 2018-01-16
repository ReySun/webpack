const fs = require('fs');
const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const loaders = require('./loaders');

/* webpack plugins */
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        main: paths.appIndexJs
    },
    resolve:{
        extensions: ['.mjs', '.js', '.json', '.jsx', '.jsx']
    },
    output: {
		filename: '[name].bundle.js',
		path: paths.appBuild
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-demo',
            template: paths.appHtml
        }),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        })
    ],
    module: {
		loaders
    }
};