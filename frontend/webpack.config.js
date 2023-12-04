// webpack.config.js
const path = require('path');

module.exports = {
  entry: '/index.html',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
