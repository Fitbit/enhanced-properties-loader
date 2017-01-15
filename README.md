[![NPM version](http://img.shields.io/npm/v/enhanced-properties-loader.svg?style=flat-square)](https://www.npmjs.org/package/enhanced-properties-loader)
[![Travis build status](http://img.shields.io/travis/Fitbit/enhanced-properties-loader/master.svg?style=flat-square)](https://travis-ci.org/Fitbit/enhanced-properties-loader)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/Fitbit/enhanced-properties-loader/master.svg?style=flat-square)](https://ci.appveyor.com/project/Fitbit/enhanced-properties-loader/branch/master)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/Fitbit/enhanced-properties-loader.svg?style=flat-square)](https://codeclimate.com/github/Fitbit/enhanced-properties-loader)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/Fitbit/enhanced-properties-loader.svg?style=flat-square)](https://codeclimate.com/github/Fitbit/enhanced-properties-loader)
[![Dependency Status](https://img.shields.io/david/Fitbit/enhanced-properties-loader.svg?style=flat-square)](https://david-dm.org/Fitbit/enhanced-properties-loader)
[![Development Dependency Status](https://img.shields.io/david/dev/Fitbit/enhanced-properties-loader.svg?style=flat-square)](https://david-dm.org/Fitbit/enhanced-properties-loader#info=devDependencies)

<a name="enhanced-properties-loader"></a>
# enhanced-properties-loader
> `*.properties` loader for webpack

<a name="enhanced-properties-loader-usage"></a>
## Usage

```javascript
var properties = require('!json!enhanced-properties!./file.properties');

console.log(properties);

```

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
