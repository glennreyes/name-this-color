const path = require('path');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [path.join(__dirname, 'src'), 'webpack-hot-middleware/client'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
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
        test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap',
        ],
        include: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          ['css?modules', 'localIdentName=[local]_[hash:base64:3]', 'sourceMap'].join('&'),
          'postcss',
          'sass?sourceMap',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ico$/,
        loader: 'file?name=[name].[ext]',
        exclude: /node_modules/,
      },
    ],
  },
  postcss: function() {
    return [
      postcssImport(),
      cssnano(),
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
