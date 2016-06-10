describe('enhanced-properties-loader', () => {
    it('should load `*.properties` successfully', () => {
        const properties = require('./fixtures/index.properties');

        expect(properties).toEqual({
            root: true,
            children: {
                child1: 1,
                child2: 'Multi Line'
            }
        });
    });
});
