const path = require('path');

module.exports = {
  // mode: 'production',
  output: {
    chunkFilename: 'js/[name].js?id=[chunkhash]',
  },
  resolve: {
    alias: {
      '@': path.resolve('resources/js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        loader: 'import-glob-loader2'
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ]
  }
};
