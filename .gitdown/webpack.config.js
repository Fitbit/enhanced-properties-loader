module.exports = {
    module: {
        loaders: [{
            test: /\.properties$/,
            loader: 'json!enhanced-properties'
        }]
    }
};
