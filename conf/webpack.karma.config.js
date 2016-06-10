import WebpackConfig from 'webpack-config';

export default new WebpackConfig().extend('./conf/webpack.base.config.js').merge({
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: [
                /node_modules/
            ],
            query: {
                babelrc: true,
                cacheDirectory: true
            }
        }]
    }
});
