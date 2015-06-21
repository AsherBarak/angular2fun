'use strict';
// constants:
var TEMPORARY_BUILD_DESTINATION_FOLDER = 'build';

var http=require('http');

// imports:
var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json', {
    typescript: require('typescript')
});
var URI = require('urijs');
var del = require('del');

// tasks:
gulp.task('serve.dev', function () {
    var gulp_dev = tsToJs('pipe/gulp_dev.ts');
    gulp_dev.Pipe.Dev.runDev();
});

gulp.task('serve.prod', function () {

});

gulp.task('default', ['serve.dev'], function () {
    // do nothing
    console.log("doing nothing");
});


// helper methods:
function tsToJs(typescriptFileName) {
    var srcUri = new URI(typescriptFileName);
    var trgtFile = srcUri.suffix("js").filename();
    var trgtFileFull = './' + TEMPORARY_BUILD_DESTINATION_FOLDER + '/' + trgtFile;

    del([trgtFileFull], function () {
        gulp.src(typescriptFileName)
            .pipe(tsc(tsProject))
            .js.pipe(gulp.dest(TEMPORARY_BUILD_DESTINATION_FOLDER));
    });

    console.log('built ' + typescriptFileName + ' to ' + trgtFileFull);
    var requredObject = require(trgtFileFull);
    return requredObject;
}