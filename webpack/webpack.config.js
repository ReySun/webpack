const fs = require('fs');
const path = require('path');
const paths = require('./paths');
const webpack = require('webpack');
const loaders = require('./loaders');

/* webpack plugins */
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: paths.appIndexJs,
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom']
    },
    resolve:{
        extensions: ['.css', '.less', '.scss', '.mjs', '.js', '.json', '.jsx', '.ts', '.tsx']
    },
    output: {
		filename: '[name].bundle.js',
		path: paths.appBuild
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: paths.appPublic + '/favicon.ico', to: paths.appBuild },
            // { from: paths.appPublic + '/service-worker.js', to: paths.appBuild }, // self pwa
            { from: paths.appPublic + '/manifest.json', to: paths.appBuild }
        ]),
        new SWPrecacheWebpackPlugin(),
        new HtmlwebpackPlugin({
            title: 'Webpack-demo',
            template: paths.appHtml
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
        new ExtractTextPlugin('style.css')
    ],
    module: {
		loaders
    }
};