
/// <reference path="../typings/tsd.d.ts" />
import {createServer } from 'http';
import open=require('open');
import gulp = require('gulp');

const PORT=2020;

export module Pipe.Dev {
    export function runDev() {
        console.log("hello world!!!!!!!!!!!!!!!");
        var server=createServer((req,res)=>{
                res.writeHead(200, {"Content-Type": "text/plain"});
                res.end("Hello World\n");
        });
        
        server.listen(PORT,()=>{open('http://localhost:' + PORT)});
        console.log("listenting at "+PORT);
    }
}

