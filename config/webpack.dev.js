var webpackMerge      = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig      = require('./webpack.common.js');
var helpers           = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool:            'cheap-module-eval-source-map',

  output: {
    publicPath:       'http://flynndev.us:8081/assets',
    filename:         '[name].js',
    chunkFilename:    '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
