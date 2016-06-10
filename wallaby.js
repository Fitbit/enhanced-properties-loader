import wallabyWebpack from 'wallaby-webpack';
import webpackConfig from './conf/webpack.wallaby.config';

const webpackPostprocessor = wallabyWebpack(webpackConfig);

export default wallaby => {
    return {
        files: [{
            pattern: 'src/**/*.js',
            load: false
        }, {
            pattern: 'test/fixtures/**/*.*',
            load: false
        }],
        tests: [{
            pattern: 'test/**/*.spec.js',
            load: false
        }],
        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babelrc: true
            })
        },
        testFramework: 'jasmine',
        postprocessor: webpackPostprocessor,
        bootstrap: () => {
            window.__moduleBundler.loadTests(); // eslint-disable-line
        }
    };
};
