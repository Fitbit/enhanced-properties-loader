import {
    readFileSync
} from 'fs';
import loader from '../src'

describe('enhanced-properties-loader', () => {
    const makeRequest = (resourcePath, callback, options = {}) => {
        loader.call({
            async: () => callback,
            resourcePath,
            options: options
        }, readFileSync(resourcePath, { encoding: 'utf8' }));
    };

    it('should load `*.properties` successfully', done => {
        makeRequest('./test/fixtures/index.properties', (err, properties) => {
            expect(err).toBe(null);
            expect(properties).toEqual({
                foo: 1,
                bar: {
                    bar1: true
                }
            });

            done();
        });
    });
});
