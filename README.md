[![NPM version](http://img.shields.io/npm/v/enhanced-properties-loader.svg?style=flat-square)](https://www.npmjs.org/package/enhanced-properties-loader)
[![Travis build status](http://img.shields.io/travis/mdreizin/enhanced-properties-loader/master.svg?style=flat-square)](https://travis-ci.org/mdreizin/enhanced-properties-loader)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/mdreizin/enhanced-properties-loader/master.svg?style=flat-square)](https://ci.appveyor.com/project/mdreizin/enhanced-properties-loader/branch/master)
[![Code Climate GPA](https://img.shields.io/codeclimate/github/mdreizin/enhanced-properties-loader.svg?style=flat-square)](https://codeclimate.com/github/mdreizin/enhanced-properties-loader)
[![Code Climate Coverage](https://img.shields.io/codeclimate/coverage/github/mdreizin/enhanced-properties-loader.svg?style=flat-square)](https://codeclimate.com/github/mdreizin/enhanced-properties-loader)
[![Dependency Status](https://img.shields.io/david/mdreizin/enhanced-properties-loader.svg?style=flat-square)](https://david-dm.org/mdreizin/enhanced-properties-loader)
[![Development Dependency Status](https://img.shields.io/david/dev/mdreizin/enhanced-properties-loader.svg?style=flat-square)](https://david-dm.org/mdreizin/enhanced-properties-loader#info=devDependencies)

<h1 id="enhanced-properties-loader">enhanced-properties-loader</h1>

`*.properties` loader for webpack

<h2 id="enhanced-properties-loader-usage">Usage</h2>

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
