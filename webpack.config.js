var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env.NODE_ENV || 'production';
var isProd = false;

var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),

];

if (isProd) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false},
        comments: false,
        minimize: true
    }));

    plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
    }));
    plugins.push(new webpack.optimize.DedupePlugin());
}


module.exports = {
    devtool: isProd ? 'source-map' : 'eval',
    entry: [
        './src/index',
        './src/style.scss'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
        library: '[name]'
    },
    plugins,
    module: {
        loaders: [
            {
                loaders: ['babel-loader'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.js$|\.jsx/,
                plugins: ['transform-runtime'],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    }
}