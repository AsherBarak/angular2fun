/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {createServer } from 'http';
import {connect} from 'connect';
//import {connect} from 'nodejs';
import open = require('open');
import gulp = require('gulp');
import tsc = require('gulp-typescript');
import serveStatic = require('serve-static');
import URI = require('URI');

const PORT = 2020;

declare var connect: any = require('');


var targetPath: string = "./build/dest/dev";

var tsProject = tsc.createProject('tsconfig.json', {
    typescript: require('typescript')
});

export module Pipe.Dev {
    export function runDev() {
        o2('');
        o2.open('');
        gulp.src(['./app/**/*.html', './app/**/*.css'])
            .pipe(gulp.dest(targetPath));

        gulp.src('./app/**/*ts')
            .pipe(tsc(tsProject)).js
            .pipe(gulp.dest(targetPath));


        var app = connect().use(serveStatic(join(__dirname, PATH.dest.prod.all)));
        requestli
         createServer(app).listen(port, function () {
            openResource('http://localhost:' + port);
        });


        var server = createServer((req, res) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Hello World\n");
        });

        server.listen(PORT, () => {
            open('http://localhost:' + PORT);
            console.log("listenting at " + PORT);
        });

    }
}

