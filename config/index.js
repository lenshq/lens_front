import minimist from 'minimist';
import { config } from './../package';

const argv = minimist(process.argv.slice(2));

const production = !!argv.production || process.env.NODE_ENV === 'production';
const sourcemap = !production && config.sourceMap;

export default {
  argv: argv,

  DEVELOPMENT: !production,
  PRODUCTION: production,
  ENVIRONMENT: production ? 'production' : 'development',

  assets: ['src/assets/**'],

  sourceMap: sourcemap,
  devtool: 'cheap-module-eval-source-map',

  appName: config.appName,
  apiRoot: config.apiRoot,

  server: require('./server.js')(config, argv),
  browserSync: require('./browsersync.js')(config, argv),
  cssnext: require('./cssnext.js')({ sourcemap }),
  bemLinter: require('./bemLinter.js')
}
