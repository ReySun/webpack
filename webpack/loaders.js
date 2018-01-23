const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.(tsx|ts)$/,
        enforce: 'pre',
        include: paths.appSrc,
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
    },
    { 
        test: /\.(tsx|ts)?$/,
        include: paths.appSrc,
        loader: "ts-loader"
    },
    {
        test: /\.css$/,
        // include: paths.appSrc,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
        })
    },
    {
        test: /\.less$/,
        include: paths.appSrc,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
        })
    }, 
    {
        test: /\.scss$/,
        include: paths.appSrc,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    },
    {
      test: /\.(png|gif|jpg)/,
      include: paths.appSrc,
      exclude: /(node_modules)/,
      loader: "file-loader?limit=10000&mimetype=image/png"
    }
];