import {
    defaultsDeep,
    camelCase
} from 'lodash';
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
 * @param {*} loaderContext
 * @returns {Object}
 */
export default loaderContext => {
    const options = loaderUtils.getLoaderConfig(loaderContext, CONFIG_KEY);

    return defaultsDeep(options, DEFAULT_OPTIONS);
};
