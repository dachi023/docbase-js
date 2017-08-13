const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'docbase.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'app'),
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
  ]
}
