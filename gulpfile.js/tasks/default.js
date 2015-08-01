gulp.task('default', () => {
  sequence(['watch', 'assets', 'server', 'sync']);
});
