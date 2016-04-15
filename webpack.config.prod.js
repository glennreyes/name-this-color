const path = require('path');
const cssnano = require('cssnano');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSitePlugin = require('react-static-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/static/',
    libraryTarget: 'commonjs2',
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
        loader: ExtractTextPlugin.extract([
          'style',
          ['css?modules', 'localIdentName=[hash:base64:3]', 'sourceMap'].join('&'),
          'postcss',
          'sass?sourceMap',
        ])
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
    new ExtractTextPlugin('[name].min.css'),
    new StaticSitePlugin({
      src: 'app',
      stylesheet: '/static/app.css',
    }),
  ],
};
