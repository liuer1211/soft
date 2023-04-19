const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development';
module.exports = {
  // 公共文件目录
  publicPath: './',
  // publicPath: '/wap/',
  // outputDir: 'wap',
  // 关闭eslint
  lintOnSave: false,
  // 去除map未加密文件
  productionSourceMap: false,
  //配置代理跨域
  // devServer: {
  //   devServer: {
  //       proxy: {
  //           "/api": {
  //               target: "http://39.98.123.211",
  //           },
  //       },
  //   },
  // },
  devServer: {
    proxy: {
      "/api": {
          target: "http://180.76.106.221:8001",
          pathRewrite: {
            '^/api': ''
          }
      },
      "/cityjson": {
        target: "http://pv.sohu.com",
      },
      "/ipJson.jsp": {
        target: "http://whois.pconline.com.cn",
      },
      "/weather_mini": {
        target: "http://wthrcdn.etouch.cn",
      },
    },
  },
  // 像素适配 宽度px转换成rem; vant-375
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
              rootValue: 37.5,
              propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
    if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
      config.mode = 'production';
      config["performance"] = {//打包文件大小配置
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000
      }
    }
    // 生产环境相关配置
    if (isProduction) {
      // 删除 打印语句
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      // 包后的文件太大导致，所以手动设置打包文件的大小限制
      config.mode = 'production';
      config["performance"] = {//打包文件大小配置
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000
      }
    //   //gzip压缩
    //   const productionGzipExtensions = ['html', 'js', 'css']
    //   config.plugins.push(
    //       new CompressionWebpackPlugin({
    //           filename: '[path].gz[query]',
    //           algorithm: 'gzip',
    //           test: new RegExp(
    //               '\\.(' + productionGzipExtensions.join('|') + ')$'
    //           ),
    //           threshold: 10240, // 只有大小大于该值的资源会被处理 10240
    //           minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
    //           deleteOriginalAssets: false // 删除原文件
    //       })
    //   )
    }
  }
}