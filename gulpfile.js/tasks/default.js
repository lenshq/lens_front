gulp.task('default', ['bundle'], () => {
  sequence(['assets', 'watch', 'server', 'sync']);
});
