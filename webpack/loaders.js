const paths = require('./paths');
module.exports = [
    {
        enforce: "pre",
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
    },
    {
        test: /\.(js|jsx|mjs)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader?cacheDirectory=true',
        query: {
            presets: ['react', 'es2015']
        }
    },
    {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1'],
        exclude: ['node_modules']
    },
    {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
    }, 
    {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.(png|gif|jpg)/,
      exclude: /(node_modules)/,
      loader: "file-loader?limit=10000&mimetype=image/png"
    }
];