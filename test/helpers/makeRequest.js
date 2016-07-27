import {
    readFile
} from 'fs';
import loader from '../../src';

export default (resourcePath, callback, options = {}, query = null) => {
    readFile(resourcePath, { encoding: 'utf8' }, (err, content) => {
        loader.call({
            async: () => callback,
            cacheable: () => {},
            options,
            query: query ? `?${JSON.stringify(query)}` : ''
        }, content);
    });
};
