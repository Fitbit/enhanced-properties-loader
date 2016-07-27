import properties from 'properties';
import getOptions from './getOptions';

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
