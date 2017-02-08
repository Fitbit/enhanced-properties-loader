[![NPM version](http://img.shields.io/npm/v/enhanced-properties-loader.svg)](https://www.npmjs.org/package/enhanced-properties-loader)
[![Travis build status](http://img.shields.io/travis/Fitbit/enhanced-properties-loader/master.svg)](https://travis-ci.org/Fitbit/enhanced-properties-loader)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/mdreizin/enhanced-properties-loader/master.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMGMxMSAwIDIwIDkgMjAgMjBzLTkgMjAtMjAgMjBTMCAzMSAwIDIwIDkgMCAyMCAwem00LjkgMjMuOWMyLjItMi44IDEuOS02LjgtLjktOC45LTIuNy0yLjEtNi43LTEuNi05IDEuMi0yLjIgMi44LTEuOSA2LjguOSA4LjkgMi44IDIuMSA2LjggMS42IDktMS4yem0tMTAuNyAxM2MxLjIuNSAzLjggMSA1LjEgMUwyOCAyNS4zYzIuOC00LjIgMi4xLTkuOS0xLjgtMTMtMy41LTIuOC04LjQtMi43LTExLjkgMEwyLjIgMjEuNmMuMyAzLjIgMS4yIDQuOCAxLjIgNC45bDYuOS03LjVjLS41IDMuMy43IDYuNyAzLjUgOC44IDIuNCAxLjkgNS4zIDIuNCA4LjEgMS44bC03LjcgNy4zeiIgZmlsbD0iI0NDQyIgZmlsbC1ydWxlPSJub256ZXJvIi8%2BPC9zdmc%2B)](https://ci.appveyor.com/project/mdreizin/enhanced-properties-loader/branch/master)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/Fitbit/enhanced-properties-loader.svg)](https://codeclimate.com/github/Fitbit/enhanced-properties-loader)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/Fitbit/enhanced-properties-loader.svg)](https://codeclimate.com/github/Fitbit/enhanced-properties-loader)
[![Dependency Status](https://img.shields.io/david/Fitbit/enhanced-properties-loader.svg)](https://david-dm.org/Fitbit/enhanced-properties-loader)
[![Development Dependency Status](https://img.shields.io/david/dev/Fitbit/enhanced-properties-loader.svg)](https://david-dm.org/Fitbit/enhanced-properties-loader#info=devDependencies)
[![Greenkeeper badge](https://badges.greenkeeper.io/Fitbit/enhanced-properties-loader.svg)](https://greenkeeper.io/)

# enhanced-properties-loader
> `*.properties` loader for webpack

## Installation

```bash
npm install json-loader enhanced-properties-loader --save-dev
```

or

```bash
yarn add json-loader enhanced-properties-loader --dev
```

## Usage

`./index.properties`

```properties
foo=bar
bar.baz=qux
```

`./index.js`

<!-- eslint no-console: "allow" -->
```javascript
var properties = require('!json!enhanced-properties!./index.properties');

console.log(properties); // Object { foo: "bar", bar: { baz: "qux" } }
```

`./webpack.config.js`

```javascript
module.exports = {
    module: {
        loaders: [{
            test: /\.properties$/,
            loader: 'json!enhanced-properties'
        }]
    }
};
```
