import {
    defaultsDeep,
    kebabCase
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
const CONFIG_KEY = kebabCase('enhanced-properties');

/**
 * @param {*} content
 * @returns {void}
 */
export default function(content) {
    if (this.cacheable) {
        this.cacheable();
    }

    const options = loaderUtils.getLoaderConfig(this, CONFIG_KEY),
        callback = this.async();

    defaultsDeep(options, DEFAULT_OPTIONS);

    properties.parse(content, options, (err, result = {}) => {
        callback(err, result);
    });
}
