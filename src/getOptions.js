import {
    defaultsDeep
} from 'lodash';
import {
    getOptions
} from 'loader-utils';

/**
 * @private
 * @type {Object}
 */
const DEFAULT_OPTIONS = {
    namespaces: true,
    variables: true
};

/**
 * @param {*} loaderContext
 * @returns {Object}
 */
export default loaderContext => {
    const options = getOptions(loaderContext) || {};

    return defaultsDeep(options, DEFAULT_OPTIONS);
};
