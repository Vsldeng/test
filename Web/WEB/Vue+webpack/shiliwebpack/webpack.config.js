const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),//dirname表示当前文件的根目录
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new VueLoderPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
    }
  }
}