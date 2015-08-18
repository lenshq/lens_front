gulp.task('default', () => sequence(['bundle', 'assets', 'watch', 'server', 'sync']));
