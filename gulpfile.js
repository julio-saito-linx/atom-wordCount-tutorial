var babel      = require('gulp-babel');
var gulp       = require('gulp');
var jscs       = require('gulp-jscs');
var jshint     = require('gulp-jshint');
var rimraf     = require('rimraf');
// var sourcemaps = require('gulp-sourcemaps');

/*
   clean
*/
gulp.task('clean-lib-src', function (cb) {
  rimraf('./lib', cb);
});

/*
   babel
*/
gulp.task('babel-src', ['clean-lib-src'], function () {
  return gulp.src('src/**/*.js')
    // .pipe(sourcemaps.init())
    .pipe(babel())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'));
});

/*
   lint: jshint + jscs
*/
gulp.task('jshint', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('jscs', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(jscs());
});
gulp.task('lint', ['jscs', 'jshint']);

/*
   watch
*/
gulp.task('watch-src', function() {
  gulp.watch('src/**/*.js', ['babel-src']);
});

/*
   default
*/
gulp.task('default', ['babel-src', 'watch-src']);
