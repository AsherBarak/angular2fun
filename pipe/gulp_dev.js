/// <reference path="../typings/tsd.d.ts" />
var http_1 = require('http');
var open = require('open');
var PORT = 2020;
var Pipe;
(function (Pipe) {
    var Dev;
    (function (Dev) {
        function runDev() {
            console.log("hello world!!!!!!!!!!!!!!!");
            var server = http_1.createServer(function (req, res) {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Hello World\n");
            });
            server.listen(PORT, function () { open('http://localhost:' + PORT); });
            console.log("listenting at " + PORT);
        }
        Dev.runDev = runDev;
    })(Dev = Pipe.Dev || (Pipe.Dev = {}));
})(Pipe = exports.Pipe || (exports.Pipe = {}));
