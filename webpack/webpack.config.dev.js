const paths = require('./paths');
var baseConfig = require('./webpack.config');

/* webpack plugins */
const webpack = require('webpack');
const merge = require('webpack-merge');

const development = {
    devtool: 'source-map',
    target: 'web',
    output: {
        publicPath: '/',
    },
    devServer: {
        contentBase: paths.appBuild,
        host: 'localhost',
        port: 8080,
        // useLocalIp: true,
        compress: true,
        clientLogLevel: "info",
        // hot: true,
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
module.exports = merge(baseConfig, development);