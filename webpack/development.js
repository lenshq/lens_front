'use strict'

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import config from '../config';
import commonConfig from './common';

export default merge(commonConfig, {
  entry: [
    'webpack-dev-server/client?' + config.server.url,
    'webpack/hot/only-dev-server'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: [path.resolve(__dirname, '../src/scripts')]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    contentBase: 'build/',
    publicPath: '/',
    hot: true,
    noInfo: true,
    historyApiFallback: true,
    quiet: true,
    silent: true,
    lazy: false,
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    stats: {
      colors: true,
      reasons: true
    }
  }
});
