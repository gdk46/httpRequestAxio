const path = require('path')

module.exports = {
  entry: './src/httRequestAxio.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.js'
  },

  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$|jsx/,
      exclude: /node_modules/
    }]
  },

  mode: 'development',
}