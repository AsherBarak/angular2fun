#Development environment overview
This document provides some information about the setup of the development environment.

##Node
Development is node based and requires [Node.js](https://nodejs.org/) to be installed and some understanding of the works of node js and [npm](https://www.npmjs.com/). 
Dependencies and versioning are managed in the [package.json](../package.json) file.
When adding dependencies use

'''bash
npm install package --save
'''
or
'''bash
npm install package --save-dev
'''
to update .json file.

##Gulp
The process that runs from TypeScript code to a working app is based on
