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
        main: paths.appIndexJs,
        vendor: ['react']
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
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module,    ) {
              // any required modules inside node_modules are extracted to vendor
              return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                  path.join(__dirname, '../node_modules')
                ) === 0
              )
            }
          }),
    ],
    module: {
		loaders
    }
};