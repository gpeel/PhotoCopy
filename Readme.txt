as usual 
npm i

+

TO INSTALL => IMPORTANT =>
npm i -g karma-cli


If TypeScript is installed
 globally, try using `npm link typescript`

 In fact WP needs typescript installed LOCALLY
 so install locally with :
 npm i -D typescript

 npm install --save-dev copy-webpack-plugin

http://www.thinksincode.com/2016/07/07/karma-jasmine-webpack.html
=================================================================
 npm install --save-dev karma karma-jasmine karma-chrome-launcher karma-webpack jasmine-core

npm install --save @types/jasmine

npm install karma-mocha-reporter --save-dev

src/**/*spec.ts


SCRIPTS are in package.json
===========================
    "test": "echo \"Error: no test specified\" && exit 1",
    "wp": "webpack --display-modules  --display-error-details",
    "start": "live-server   --mount=/:./dist --wait=500"