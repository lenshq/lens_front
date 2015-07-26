require('babel/register');

global.config = require('../config');
global.webpackConfig = require(`../webpack/${config.ENVIRONMENT}.js`);

global.sequence = require('run-sequence');
global.gulp = require('gulp');
global.$ = require('gulp-load-plugins')();

global.watch = false;

require('require-dir')('./tasks', { recursive: true });
