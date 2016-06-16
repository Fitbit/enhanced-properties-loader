export default wallaby => {
    return {
        files: [
            'src/**/*.js',
            'test/fixtures/**/*.js',
            'test/fixtures/**/*.properties'
        ],
        tests: [
            'test/**/*.spec.js'
        ],
        testFramework: 'jasmine',
        env: {
            type: 'node'
        },
        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babelrc: true
            })
        }
    };
};
