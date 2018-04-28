[![NPM version](https://img.shields.io/npm/v/enhanced-properties-loader.svg)](https://www.npmjs.org/package/enhanced-properties-loader)
[![Travis build status](https://travis-ci.org/Fitbit/enhanced-properties-loader.svg?branch=master)](https://travis-ci.org/Fitbit/enhanced-properties-loader)
[![AppVeyor build status](https://ci.appveyor.com/api/projects/status/c9plkjfm1u4diyk2/branch/master?svg=true)](https://ci.appveyor.com/project/mdreizin/enhanced-properties-loader/branch/master)
[![Code Climate Maintainability](https://api.codeclimate.com/v1/badges/97d2519775165be030e4/maintainability)](https://codeclimate.com/github/Fitbit/enhanced-properties-loader)
[![Code Climate Coverage](https://api.codeclimate.com/v1/badges/97d2519775165be030e4/test_coverage)](https://codeclimate.com/github/Fitbit/enhanced-properties-loader)
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

<!-- eslint no-console: 0 -->
```javascript
var properties = require('!json!enhanced-properties!./index.properties');

console.log(properties); // Object { foo: "bar", bar: { baz: "qux" } }
```

`./webpack.config.js`

```javascript
module.exports = {
    module: {
        rules: [{
            test: /\.properties$/,
            loader: 'enhanced-properties-loader'
        }]
    }
};
```
