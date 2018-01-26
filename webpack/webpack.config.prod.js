const path = require('path');
const paths = require('./paths');
var baseConfig = require('./webpack.config');

/* webpack plugins */
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const production = {
    plugins: [
        new CleanWebpackPlugin(paths.appBuild, {
            root: path.resolve(__dirname, '../'),
        }),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(false)
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new MinifyPlugin(),
        new BabiliPlugin(),
        new OptimizeCssAssetsPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
module.exports = merge(baseConfig, production);