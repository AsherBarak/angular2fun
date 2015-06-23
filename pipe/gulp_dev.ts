
/// <reference path="../typings/tsd.d.ts" />
import {createServer } from 'http';
//import {connect} from 'nodejs';
import open = require('open');
import gulp = require('gulp');
import tsc = require('gulp-typescript');
//import connect = require('connect');
import serveStatic = require('serve-static');
import URIjs = $('urijs');
//import {URI} from 'uri';
const PORT = 2020;

declare var connect: any=require('');


var targetPath: string = "./build/dest/dev";

var tsProject = tsc.createProject('tsconfig.json', {
    typescript: require('typescript')
});

export module Pipe.Dev {
    export function runDev() {

         gulp.src(['./app/**/*.html', './app/**/*.css'])
            .pipe(gulp.dest(targetPath));

         gulp.src('./app/**/*ts')
             .pipe(tsc(tsProject)).js
             .pipe(gulp.dest(targetPath));
        

         var app = connect().use(serveStatic(join(__dirname, PATH.dest.prod.all)));
         http.createServer(app).listen(port, function () {
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

