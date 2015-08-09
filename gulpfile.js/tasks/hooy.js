import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const bundler = webpack(webpackConfig);

gulp.task('hooy', () => {
  browserSync({
    ...config.browserSync,
    server: {
      baseDir: 'src',
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          noInfo: true,
          quiet: true,
          lazy: false,
          inline: true,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          stats: {
            colors: true,
            reasons: true,
            timings: true
          }
        }),
        webpackHotMiddleware(bundler)
      ]
    }
  });
});
