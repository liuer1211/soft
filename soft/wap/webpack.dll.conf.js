const path = require('path')
const webpack = require('webpack')

// dll文件存放的目录
const dllPath = 'dll/'

const libs = {
    'ui': ['ant-design-vue'],
    'frame': ['vue', 'vuex', 'vue-router', 'moment', 'quill'],
    'chart': ['@antv/g2', '@antv/data-set']
}

module.exports = {
  entry: {
    // 需要提取的库文件
    ...libs
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]'
  },
  plugins: [
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}
