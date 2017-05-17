const path =require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',//应用层序从这里执行
  output: {
    path:path.resolve(__dirname,"build"),//出口文件
    filename: "bundle.js",//出口文件名
    publicPath:'build/'//有了这句导入图片就自带路径了
  },
  watch: true, //监听入口文件的修改
  devtool: "source-map",//把错误信息指向源代码
  module: {
  rules: [//所有loader都写在这
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },//打包js的时候的处理
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "postcss-loader"
        })
      },//把css打包到一个文件
      {
        test:/\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["postcss-loader",'less-loader']//顺序不能乱 先执行的后边的loader
        })
      },// 把less打包到一个文件
      // {test: /\.css$/,use:['style-loader','postcss-loader']},//打包css顺序不能乱
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
  plugins: [//插件的配置
    // 构建优化插件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new ExtractTextPlugin("styles.css"),//导出打包完的css 出口是build文件夹
    new HtmlWebpackPlugin({
      template:'template/index.html',
      filename:path.resolve(__dirname,'index.html')
    })//创建html模板
  ],

}
