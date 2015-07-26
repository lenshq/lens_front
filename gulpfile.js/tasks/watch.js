gulp.task('watch', () => {
  global.watch = true;
  gulp.watch(config.assets, ['assets']);
});
