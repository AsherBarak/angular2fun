#Development environment overview
This document provides a short overview of the development environment.

##Node
Development is node based and requires [Node.js](https://nodejs.org/) to be installed and some understanding of the works of Node.js and [npm](https://www.npmjs.com/). 
Dependencies and versioning are managed in the [package.json](../package.json) file.
When adding dependencies use

```bash
npm install package --save
```
or
```bash
npm install package --save-dev
```
to update [package.json](../package.json) file.

##TypeScript
Development is in [TypeScript](http://www.typescriptlang.org/), the recomendes method for Angular2 development. Using other js liberaries in typescript is easier when the type information is available for them. Type definitions are usually located in the [Defintly Typed](https://github.com/borisyankov/DefinitelyTyped) github project.

We use type script definition manager ([tsd](https://github.com/DefinitelyTyped/tsd)) to manage defintions so if you wan to add a type definition file, make sure you have it installed:
```bash
npm install tsd -g
```
and use the `save` tag to update the [tsd.d.ts](../typings/tsd.d.ts) and the [tsd.json](../tsd.json) files:
```bush
tsd typeDefinitions -save
```

##Gulp
The process that runs from TypeScript code to a working app is based on [Gulp](http://gulpjs.com/) (You might have been doing this stuff with [Grunt](http://gruntjs.com/)).

##Continuous Integration (CI)
We use [Travis CI](https://travis-ci.org/) for cloud based continuous integration (how cool is that?). It is rediculesly easy. Check out [this](http://tech.pro/tutorial/1749/get-your-ci-on-with-travis-ci) article for getting started.
