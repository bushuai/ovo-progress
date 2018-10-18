const path = require('path')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'scroll-progress.js',
    path: path.join(__dirname, 'dist'),
    library: 'ScrollProgress',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin('dist')
  ]
}