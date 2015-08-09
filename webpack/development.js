'use strict'

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import config from '../config';
import commonConfig from './common';

export default merge(commonConfig, {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
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
  ]
});
