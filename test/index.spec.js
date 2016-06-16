import {
    readFileSync
} from 'fs';
import loader from '../src'

describe('enhanced-properties-loader', () => {
    it('should load `*.properties` successfully', done => {
        const callback = (err, properties) => {
            expect(err).toBe(null);
            expect(properties).toEqual({
                foo: 1,
                bar: {
                    bar1: true
                }
            });

            done();
        };

        loader.call({
            async: () => callback,
            options: {}
        }, readFileSync('./test/fixtures/index.properties', { encoding: 'utf8' }));
    });
});
