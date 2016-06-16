import {
    defaultsDeep,
    camelCase
} from 'lodash';
import properties from 'properties';
import loaderUtils from 'loader-utils';

/**
 * @private
 * @type {Object}
 */
const DEFAULT_OPTIONS = {
    namespaces: true,
    variables: true
};

/**
 * @private
 * @type {String}
 */
const CONFIG_KEY = camelCase('enhanced-properties');

/**
 * @private
 * @param {*} loaderContext
 * @returns {Object}
 */
const getOptions = loaderContext => {
    const options = loaderUtils.getLoaderConfig(loaderContext, CONFIG_KEY);

    return defaultsDeep(options, DEFAULT_OPTIONS);
};

/**
 * @param {*} content
 * @returns {void}
 */
export default function(content) {
    if (this.cacheable) {
        this.cacheable();
    }

    const options = getOptions(this),
        callback = this.async();

    properties.parse(content, options, (err, result = {}) => {
        callback(err, result);
    });
}
