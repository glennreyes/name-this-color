const path = require('path');
const cssnano = require('cssnano');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/static/',
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
        loaders: [
          'style',
          ['css?modules', 'localIdentName=[local]_[hash:base64:5]', 'sourceMap'].join('&'),
          'postcss',
          'sass?sourceMap',
        ],
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
  ],
};
