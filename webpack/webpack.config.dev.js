const paths = require('./paths');
var baseConfig = require('./webpack.config');

const merge = require('webpack-merge');

const development = {
    target: 'web',
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
    }
};
module.exports = merge(baseConfig, development);