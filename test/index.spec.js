import makeRequest from './helpers/makeRequest';

describe('enhanced-properties-loader', () => {
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
