'use strict';

var gulp = require('gulp');
var tsc = require('gulp-typescript');

gulp.task('serve.dev', function () {
    // compile and build dev gulp:
      var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'output.js'
      }));
  return tsResult.js.pipe(gulp.dest('built/local'));
    
    // run dev gulp tasks:
});

gulp.task('serve.prod', function () {
    
});

gulp.task('default', function() {
  // do nothing
});