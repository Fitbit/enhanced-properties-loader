import WebpackConfig from 'webpack-config';

const PROPERTIES_LOADER = require.resolve('../src');

export default new WebpackConfig().merge({
    resolveLoader: {
        alias: {
            'enhanced-properties': PROPERTIES_LOADER
        }
    },
    module: {
        loaders: [{
            test: /\.properties$/,
            loader: 'json!enhanced-properties'
        }]
    }
});
