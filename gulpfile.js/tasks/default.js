gulp.task('default', () => {
  sequence(['watch', 'assets', 'bundle', 'server', 'sync']);
});
