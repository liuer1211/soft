module.exports = {
  // 公共文件目录
  publicPath: './',
  // 关闭eslint
  lintOnSave: false,
  // 去除map未加密文件
  // productionSourceMap: false,
  //配置代理跨域
  // devServer: {
  //     proxy: {
  //         // "/api": {
  //         //     target: "http://39.98.123.211",
  //         // },
  //     },
  // },
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
}