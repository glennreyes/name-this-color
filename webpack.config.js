import path from 'path'
import cssnano from 'cssnano'
import webpack from 'webpack'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [path.join(__dirname, 'app'), 'webpack-hot-middleware/client'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          ['css?modules', 'localIdentName=[local]_[hash:base64:5]', 'sourceMap'].join('&'),
          'postcss',
          'sass?sourceMap'
        ]
      }
    ]
  },
  postcss: () => [cssnano()],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
