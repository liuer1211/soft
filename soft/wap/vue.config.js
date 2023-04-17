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
      // 打包文件大小配置
      config.performance = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  }
}