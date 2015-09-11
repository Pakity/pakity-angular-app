var gulp = require('gulp');
var connect = require('gulp-connect');

var paths = {
  htmlInputFiles: './app/**/*.html'
};

gulp.task('default', ['connect']);

gulp.task('connect', function () {
  connect.server({
    root: './',
    port: 8000,
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src(paths.htmlInputFiles)
    .pipe(connect.reload());
});
