'use strict'

import path from 'path';
import webpack from 'webpack';
import config from '../config';

import HtmlPlugin from 'html-webpack-plugin';

export default {
  context: path.resolve(__dirname, '../src/scripts'),
  entry: ['./main'],
  resolve: {
    root: path.resolve(__dirname, '..'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      'react': path.resolve(__dirname, '../node_modules/react'),
      'redux': path.resolve(__dirname, '../node_modules/redux')
    }
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loaders: ['file']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ['url?limit=25000']
      },
      {
        test: /\.woff$/,
        include: [path.resolve(__dirname, '../src/fonts')],
        loaders: ['url?limit=25000']
      }
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: config.DEVELOPMENT,
      __DEVTOOLS__: config.DEVELOPMENT,
      'settings': {
        'apiRoot': JSON.stringify(config.apiRoot),
      },
      'process.env': { 'NODE_ENV': JSON.stringify(config.ENVIRONMENT) }
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new HtmlPlugin({
      title: config.appName,
      template: path.resolve(__dirname, '../src/templates/main.html')
    })
  ],

  target: 'web',
  debug: config.DEVELOPMENT,
  cache: config.DEVELOPMENT,
  devtool: config.DEVELOPMENT ? config.devtool : false,
  stats: {
    children: false,
    colors: true,
    reasons: config.DEVELOPMENT
  },
  postcss: function() {
    return [
      require('precss'),
      require('cssnext')(config.cssnext),
      require('postcss-nested'),
      require('postcss-size'),
      require('postcss-focus'),
      require('postcss-position'),
      require('postcss-bem-linter')(config.bemLinter),
      require('postcss-reporter')
    ];
  },
  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc'),
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true,
    failOnError: false,
    failOnWarning: false
  }
}
