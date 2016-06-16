import {
    defaultsDeep,
    cloneDeep,
    merge,
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
const OPTIONS_PROPERTY = kebabCase('enhanced-properties');

/**
 * @param {*} content
 * @returns {void}
 */
export default function(content) {
    if (this.cacheable) {
        this.cacheable();
    }

    const query = loaderUtils.parseQuery(this.query),
        globalOptions = this.options[query.config || OPTIONS_PROPERTY] || {},
        localOptions = merge({}, cloneDeep(query), globalOptions),
        callback = this.async();

    defaultsDeep(localOptions, DEFAULT_OPTIONS);

    properties.parse(content, localOptions, (err, result = {}) => {
        callback(err, result);
    });
}
