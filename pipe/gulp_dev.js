var http_1 = require('http');
var connect_1 = require('connect');
//import {connect} from 'nodejs';
var open = require('open');
var gulp = require('gulp');
var tsc = require('gulp-typescript');
var serveStatic = require('serve-static');
var PORT = 2020;
var targetPath = "./build/dest/dev";
var tsProject = tsc.createProject('tsconfig.json', {
    typescript: require('typescript')
});
var Pipe;
(function (Pipe) {
    var Dev;
    (function (Dev) {
        function runDev() {
            o2('');
            o2.open('');
            gulp.src(['./app/**/*.html', './app/**/*.css'])
                .pipe(gulp.dest(targetPath));
            gulp.src('./app/**/*ts')
                .pipe(tsc(tsProject)).js
                .pipe(gulp.dest(targetPath));
            var app = connect_1.connect().use(serveStatic(join(__dirname, PATH.dest.prod.all)));
            requestli;
            http_1.createServer(app).listen(port, function () {
                openResource('http://localhost:' + port);
            });
            var server = http_1.createServer(function (req, res) {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Hello World\n");
            });
            server.listen(PORT, function () {
                open('http://localhost:' + PORT);
                console.log("listenting at " + PORT);
            });
        }
        Dev.runDev = runDev;
    })(Dev = Pipe.Dev || (Pipe.Dev = {}));
})(Pipe = exports.Pipe || (exports.Pipe = {}));
