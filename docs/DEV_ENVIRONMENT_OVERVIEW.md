#Development environment overview
This document provides some information about the setup of the development environment.

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

##Typescript
Development is in [TypeScript](http://www.typescriptlang.org/), the recomendes method for Angular2 development. Using other js liberaries in typescript is easies when the type information is available for them. Type definitions are usually located in the [Defintly Typed](https://github.com/borisyankov/DefinitelyTyped) github project.



##Gulp
The process that runs from TypeScript code to a working app is based on [Gulp](http://gulpjs.com/) (this achives the same stuff done by [Grunt](http://gruntjs.com/) in the past).
