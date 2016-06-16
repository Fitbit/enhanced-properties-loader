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
        }, `foo=1\nbar.bar1=true`);
    });
});
