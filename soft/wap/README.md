# 开始
    vue create wap
    npm install
    npm start
    npm run build

# 访问
  [点我访问](https://liuer1211.github.io/soft/soft/wap/dist/)

# 配置 package.json
    快捷启动 npm start 
        "start": "npm run serve",
    启动打开页面 
        "serve": "vue-cli-service serve --open" 
    本地启动为开发环境
        development
    生产环境 新建 .env.production文件
        默认打包生产环境 production
    测试环境 新建 .env.test文件
        设置 test
        "test": "vue-cli-service build --mode test",

# 创建并配置 vue.config.js
    静态文件入口
    跨域
    打包文件目录

# 下载依赖
    npm install --save vue-router@3
    npm install --save vuex@3.6.2
    npm install --save axios
    npm install mockjs
    npm install --save vant@2.5.2
    npm install --save less less-loader@5
    npm install vue-lazyload -S
    npm install --save nprogress
    npm install vue-infinite-scroll
    npm install amfe-flexible --save
    npm i postcss-pxtorem@5.1.1  --save
    npm i vue-video-player --save

# 整体配置
    reset.css
    300毫秒延时  - js下载到本地
    vw + rem
      100vw = 一个完美视口
      ui图 750px
      1px = 0.13333vw
      移动端最小像素12px
      40px   --  1rem
      1.3333vw * 40  = 5.3333vw
      设计图宽度 / 40rem = css宽度
    适配插件
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
    路径简写配置： "@/*": ["src/*"]
    打包配置
      图片文件大小
      日志显示
    阿里矢量图标库
      <i class="iconfont icon-double-arrow-left"></i>


# 路由
    实例化路由
    交由vue管理
    展示初始页面
    push replace 重复点击跳转bug修复
    切换返回顶部

# 首页
    搜索框
      输入即搜索 节流
    展示内容
      触底加载
    mock 模拟数据
    axios
    vuex
    接口图片位置找不到
    路由跳转params参数-使用path参数传不过来 - 父子组件时使用path，如何传值
        this.$router.push({
          name: 'novel',
          params: {
            data: item
          }
        })
    
    左侧弹框
      logo
      用户
    右下角 
      返回 
      回到顶部
      半圆
    颜色搭配
    字体尺寸统一

# 剧本
    阴影
    省略
    flex
    filter
    less的使用
      继承 混入 变量
    父子组件
    父子路由

# 分类
    渐变
    视屏

# 详情



git 切换分支
分支提交 合并

input v-model 的 组件

less  不能计算

时间总线
发布订阅


    
    
