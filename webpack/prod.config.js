const merge = require('webpack-merge');
const common = require('./common.config.js');

const config = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
});

module.exports = config;
