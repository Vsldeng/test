//导入path模块
const path = require('path')

//引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    entry: './src/main.js',
    //打包出口文件
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    },
    //配置打包规则
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit: 2048
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.styl(us)?/,
            use: ['vue-style-loader',
                'css-loader',
                'postcss-loader',
                'stylus-loader'
            ]
        }]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            '@': path.resolve(__dirname, '../src'),
            'images': path.resolve(__dirname, '../src/assets/images')
        }
    }
}