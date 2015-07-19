'use strict'

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import config from '../config';
import commonConfig from './common.config';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default merge(commonConfig, {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?optional=runtime'],
        include: [path.resolve(__dirname, '../src/scripts')]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true,
      sourceMap: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
});
