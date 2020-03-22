const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const PORT = process.env.PORT && Number(process.env.PORT);

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        open : true,
        port: PORT || 9002,
        proxy: {
            '/api': {
                target: 'http://localhost:9091',
                pathRewrite: { '^/api': '/api' }
            }
        }
    }
});
