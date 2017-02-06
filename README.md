[![NPM version](http://img.shields.io/npm/v/enhanced-properties-loader.svg?style=flat-square)](https://www.npmjs.org/package/enhanced-properties-loader)
[![Travis build status](http://img.shields.io/travis/Fitbit/enhanced-properties-loader/master.svg?style=flat-square)](https://travis-ci.org/Fitbit/enhanced-properties-loader)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/mdreizin/enhanced-properties-loader/master.svg?style=flat-square)](https://ci.appveyor.com/project/mdreizin/enhanced-properties-loader/branch/master)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/Fitbit/enhanced-properties-loader.svg?style=flat-square)](https://codeclimate.com/github/Fitbit/enhanced-properties-loader)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/Fitbit/enhanced-properties-loader.svg?style=flat-square)](https://codeclimate.com/github/Fitbit/enhanced-properties-loader)
[![Dependency Status](https://img.shields.io/david/Fitbit/enhanced-properties-loader.svg?style=flat-square)](https://david-dm.org/Fitbit/enhanced-properties-loader)
[![Development Dependency Status](https://img.shields.io/david/dev/Fitbit/enhanced-properties-loader.svg?style=flat-square)](https://david-dm.org/Fitbit/enhanced-properties-loader#info=devDependencies)

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
