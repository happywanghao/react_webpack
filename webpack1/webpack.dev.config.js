const path =require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
  entry: './src/index.js',//应用层序从这里执行
  output: {
    path:path.resolve(__dirname,"build"),//出口文件
    filename: "bundle[hash:5].js",//出口文件名
  },
  devServer: {
    // contentBase: path.join(__dirname, "build"),//这个文件夹下的东西localhost:3000就能拿到
    compress: true,
    port: 3000,//指定端口
    historyApiFallback: true,//所有404都返回index.html

  },
  devtool: "source-map",//把错误信息指向源代码
  module: {
  rules: [//所有loader都写在这
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },//打包js的时候的处理
      { test: /\.less$/, use: ['style-loader','postcss-loader','less-loader'] },
      {test: /\.css$/,use: ['style-loader','postcss-loader']},//打包css顺序不能乱
      {test: /\.(jpe?g|png)$/ ,use: 'file-loader'},//打包图片
      {
        test: require.resolve('jquery'),//引入jquery的时候
        use:[{
          loader:'expose-loader',//使用这个插件
          options:'$'//把$暴露在window下
        }]
      }//解决引入jq后jq不在window下的问题
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'template/index.html',
    }),//创建html模板
    new OpenBrowserPlugin({
      url:'http://localhost:3000'
    })
  ],
}
