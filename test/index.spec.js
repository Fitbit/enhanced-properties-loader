import {
    readFileSync
} from 'fs';
import loader from '../src'

describe('enhanced-properties-loader', () => {
    const makeRequest = (resourcePath, callback, options = {}, query = null) => {
        loader.call({
            async: () => callback,
            cacheable: () => {},
            resourcePath,
            options,
            query: query ? `?${JSON.stringify(query)}` : ''
        }, readFileSync(resourcePath, { encoding: 'utf8' }));
    };

    it('should load `*.properties` with `namespaces`', done => {
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

    it('should load `*.properties` without `namespaces`', done => {
        makeRequest('./test/fixtures/index.properties', (err, properties) => {
            expect(err).toBe(null);
            expect(properties).toEqual({
                foo: 1,
                'bar.bar1': true
            });

            done();
        }, {}, {
            namespaces: false
        });
    });
});
