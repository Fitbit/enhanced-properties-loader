import webpackConfig from './conf/webpack.karma.config';

export default config => {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: [
            'jasmine',
            'jasmine-matchers'
        ],
        singleRun: true,
        files: [
            'node_modules/babel-polyfill/browser.js',
            'test/**/*.js'
        ],
        preprocessors: {
            'src/**/*.js': [
                'babel'
            ],
            'test/**/*.js': [
                'webpack',
                'sourcemap'
            ]
        },
        reporters: [
            'spec'
        ],
        client: {
            captureConsole: false
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            quiet: true
        },
        plugins: [
            'karma-webpack',
            'karma-babel-preprocessor',
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-spec-reporter',
            'karma-sourcemap-loader',
            'karma-phantomjs-launcher'
        ]
    });
};
