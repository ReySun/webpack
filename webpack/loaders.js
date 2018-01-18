const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.(tsx|ts)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
    },
    { 
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader"
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
        })
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
        })
    }, 
    {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    },
    {
      test: /\.(png|gif|jpg)/,
      exclude: /(node_modules)/,
      loader: "file-loader?limit=10000&mimetype=image/png"
    }
];