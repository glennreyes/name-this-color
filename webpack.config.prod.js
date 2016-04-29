const path = require('path');
const cssnano = require('cssnano');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[chunkhash].js',
    publicPath: '',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', [
          ['css?modules', 'localIdentName=[hash:base64:3]', 'sourceMap'].join('&'),
          'postcss',
          'sass?sourceMap',
        ])
      },
      {
        test: /\.ico$/,
        loader: 'file?name=[name].[ext]',
        exclude: /node_modules/,
      },
    ],
  },
  postcss: function() {
    return [cssnano()]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      screw_ie8: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('[chunkhash].css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
    }),
  ],
};
