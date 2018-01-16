const path = require('path');
const paths = require('./paths');
var baseConfig = require('./webpack.config');

/* webpack plugins */
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const production = {
    plugins: [
        new CleanWebpackPlugin(paths.appBuild, {
            root: path.resolve(__dirname, '../'),
        }),
        new webpack.optimize.UglifyJsPlugin({
			compress: {
			  warnings: false,
			  comparisons: false,
			},
			mangle: {
			  safari10: true,
			},
			output: {
			  comments: false,
			  ascii_only: true,
			},
			sourceMap: false,
		})
    ]
};
module.exports = merge(baseConfig, production);