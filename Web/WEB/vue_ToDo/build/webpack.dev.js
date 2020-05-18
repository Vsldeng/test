const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')

const devConfig = {
    mode: 'development',
    //打包入口
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true,
        port: 8080,
    },
    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}
module.exports = merge(baseConfig, devConfig)